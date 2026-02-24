import { useState } from 'react';
import { useGetRequestsPage } from '../../hooks/useQueries';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { ChevronLeft, ChevronRight, Calendar, Users, Mail, Phone, Package } from 'lucide-react';
import { Badge } from '../ui/badge';
import type { BookingRequest } from '../../backend';

const PAGE_SIZE = 10;

export default function AdminRequestsView() {
  const [currentPage, setCurrentPage] = useState(0);
  const { data: requests = [], isLoading } = useGetRequestsPage(BigInt(currentPage), BigInt(PAGE_SIZE));

  const hasNextPage = requests.length === PAGE_SIZE;
  const hasPrevPage = currentPage > 0;

  const formatDate = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) / 1_000_000);
    return date.toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading booking requests...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Booking Requests</h1>
          <p className="text-muted-foreground mt-1">Manage and review venue booking inquiries</p>
        </div>
        <Badge variant="secondary" className="text-lg px-4 py-2 bg-primary/10 text-primary border-primary/20">
          Page {currentPage + 1}
        </Badge>
      </div>

      {requests.length === 0 ? (
        <Card className="border-primary/20">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Package className="h-16 w-16 text-muted-foreground mb-4" />
            <p className="text-xl font-medium text-muted-foreground">No booking requests found</p>
            <p className="text-sm text-muted-foreground mt-2">
              {currentPage === 0 ? 'New requests will appear here' : 'Try going back to previous pages'}
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {requests.map((request: BookingRequest) => (
            <Card key={request.id.toString()} className="hover:shadow-lg transition-shadow border-primary/20 hover:border-primary/50">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-foreground">{request.fullName}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      Submitted {formatDate(request.createdAt)}
                    </p>
                  </div>
                  {request.package && (
                    <Badge variant="outline" className="ml-2 border-primary/40 text-primary">
                      {request.package}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <a href={`tel:${request.phone}`} className="text-sm hover:underline hover:text-primary transition-colors">
                      {request.phone}
                    </a>
                  </div>
                  {request.email && (
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <a href={`mailto:${request.email}`} className="text-sm hover:underline hover:text-primary transition-colors">
                        {request.email}
                      </a>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm">{request.eventDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm">{request.guests.toString()} guests</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Event Type</p>
                    <p className="text-sm font-medium text-foreground">{request.eventType}</p>
                  </div>
                  {request.package && (
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Package</p>
                      <p className="text-sm font-medium text-foreground">{request.package}</p>
                    </div>
                  )}
                </div>

                {request.message && (
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Message</p>
                    <p className="text-sm text-muted-foreground bg-secondary/30 rounded-md p-3 border border-primary/10">
                      {request.message}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex items-center justify-center gap-4 pt-4">
        <Button
          variant="outline"
          onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
          disabled={!hasPrevPage}
          className="border-primary/30 text-primary hover:bg-primary/10 disabled:opacity-40"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Previous
        </Button>
        <span className="text-sm text-muted-foreground">Page {currentPage + 1}</span>
        <Button
          variant="outline"
          onClick={() => setCurrentPage((p) => p + 1)}
          disabled={!hasNextPage}
          className="border-primary/30 text-primary hover:bg-primary/10 disabled:opacity-40"
        >
          Next
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </div>
  );
}
