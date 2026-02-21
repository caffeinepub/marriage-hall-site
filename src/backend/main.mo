import Map "mo:core/Map";
import Time "mo:core/Time";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Nat "mo:core/Nat";
import Int "mo:core/Int";
import Random "mo:core/Random";
import Principal "mo:core/Principal";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access this endpoint");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  public type BookingRequest = {
    id : Nat;
    fullName : Text;
    phone : Text;
    email : ?Text;
    eventDate : Text;
    eventType : Text;
    guests : Nat;
    package : ?Text;
    message : Text;
    consent : Bool;
    createdAt : Time.Time;
  };

  type BookingRequestInput = {
    fullName : Text;
    phone : Text;
    email : ?Text;
    eventDate : Text;
    eventType : Text;
    guests : Nat;
    package : ?Text;
    message : Text;
    consent : Bool;
  };

  let requests = Map.empty<Nat, BookingRequest>();

  module BookingRequest {
    public func compareNewestFirst(a : BookingRequest, b : BookingRequest) : Order.Order {
      compareByCreatedAt(b, a);
    };

    public func compareByCreatedAt(a : BookingRequest, b : BookingRequest) : Order.Order {
      Int.compare(b.createdAt, a.createdAt);
    };
  };

  func generateRequestId() : async Nat {
    let random = Random.crypto();
    let randomNat = await* random.natRange(0, 1_000_000_000);
    randomNat;
  };

  public shared ({ caller }) func submitBookingRequest(input : BookingRequestInput) : async () {
    let id = await generateRequestId();
    let request : BookingRequest = {
      id;
      fullName = input.fullName;
      phone = input.phone;
      email = input.email;
      eventDate = input.eventDate;
      eventType = input.eventType;
      guests = input.guests;
      package = input.package;
      message = input.message;
      consent = input.consent;
      createdAt = Time.now();
    };
    requests.add(id, request);
  };

  public query ({ caller }) func getRequestsPage(page : Nat, pageSize : Nat) : async [BookingRequest] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view booking requests");
    };

    let totalRequests = requests.size();
    let totalPages = if (pageSize == 0) { 0 } else { (totalRequests + pageSize - 1) / pageSize };
    if (totalRequests == 0 or totalPages == 0) {
      return [];
    };
    if (page > (totalPages - 1)) {
      return [];
    };

    let allRequests = requests.values().toArray().sort(BookingRequest.compareNewestFirst);
    let start = page * pageSize;
    let end = Nat.min(start + pageSize, allRequests.size());
    if (start >= allRequests.size()) {
      return [];
    };
    allRequests.sliceToArray(start, end);
  };

  public query ({ caller }) func getRequest(id : Nat) : async BookingRequest {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view booking requests");
    };

    switch (requests.get(id)) {
      case (null) { Runtime.trap("Booking request does not exist") };
      case (?request) { request };
    };
  };
};
