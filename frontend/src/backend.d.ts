import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface BookingRequestInput {
    consent: boolean;
    package?: string;
    fullName: string;
    email?: string;
    message: string;
    phone: string;
    guests: bigint;
    eventDate: string;
    eventType: string;
}
export interface UserProfile {
    name: string;
}
export interface BookingRequest {
    id: bigint;
    consent: boolean;
    package?: string;
    createdAt: Time;
    fullName: string;
    email?: string;
    message: string;
    phone: string;
    guests: bigint;
    eventDate: string;
    eventType: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getRequest(id: bigint): Promise<BookingRequest>;
    getRequestsPage(page: bigint, pageSize: bigint): Promise<Array<BookingRequest>>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submitBookingRequest(input: BookingRequestInput): Promise<void>;
}
