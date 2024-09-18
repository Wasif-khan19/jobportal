import { Badge } from "../ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const applications = [
  {
    date: "01-01-0101",
    role: "Full Stack Developer",
    company: "Google",
    status: "Approved",
  },
  {
    date: "01-01-0101",
    role: "Full Stack Developer",
    company: "Google",
    status: "Pending",
  },
  {
    date: "01-01-0101",
    role: "Full Stack Developer",
    company: "Google",
    status: "Rejected",
  },
  {
    date: "01-01-0101",
    role: "Full Stack Developer",
    company: "Google",
    status: "Approved",
  },
  
];

function AppliedJobs() {
  const getBadgeColor = (status) => {
    switch (status) {
      case "Approved":
        return "bg-green-500 text-white";
      case "Pending":
        return "bg-yellow-500 text-black";
      case "Rejected":
        return "bg-red-500 text-white";

    }
  };

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>DATE</TableHead>
            <TableHead>ROLE</TableHead>
            <TableHead>COMPANY</TableHead>
            <TableHead>STATUS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applications.map((application, index) => (
            <TableRow key={index}>
              <TableCell>{application.date}</TableCell>
              <TableCell>{application.role}</TableCell>
              <TableCell>{application.company}</TableCell>
              <TableCell>
                <Badge
                  className={`items-center justify-center flex h-6 w-16 ${getBadgeColor(
                    application.status
                  )}`}
                >
                  {application.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default AppliedJobs;
