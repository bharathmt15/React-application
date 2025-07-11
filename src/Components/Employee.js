import React, {useState} from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

export default function Employee() {
    const emps = [
        {
            empNo: 101,
            empName: "Bharath",
            job: "Front-end developer",
            salary: 56000,
            mobileNo: "86******74",
            emailId: "kumarbharat9928@gmail.com",
        },
        {
            empNo: 102,
            empName: "Hunter",
            job: "Back-end developer",
            salary: 96000,
            mobileNo: "70******31",
            emailId: "hunterxzone91@gmail.com",
        },
        {
            empNo: 103,
            empName: "Stelath",
            job: "UI-UX",
            salary: 26000,
            mobileNo: "61******90",
            emailId: "stealthman93@gmail.com",
        },
        {
            empNo: 104,
            empName: "Sticforce",
            job: "DEVOPS",
            salary: 76000,
            mobileNo: "92******10",
            emailId: "mysticforce02@gmail.com",
        },
        {
            empNo: 105,
            empName: "Shadow",
            job: "Business Analyst",
            salary: 16000,
            mobileNo: "79******16",
            emailId: "shadowprime1@gmail.com",
        },
        {
            empNo: 106,
            empName: "Blaze",
            job: "Financial Manager",
            salary: 46000,
            mobileNo: "82******17",
            emailId: "blazetiger445@gmail.com",
        },
        {
            empNo: 107,
            empName: "Knight",
            job: "CA",
            salary: 86000,
            mobileNo: "88******58",
            emailId: "cyberknight01@gmail.com",
        },
        {
            empNo: 108,
            empName: "Alpha",
            job: "Accounts Manager",
            salary: 36000,
            mobileNo: "91******20",
            emailId: "alphahero0007@gmail.com",
        },
        {
            empNo: 109,
            empName: "Speed",
            job: "Tester",
            salary: 52000,
            mobileNo: "81******90",
            emailId: "speedlegend99@gmail.com",
        },
        {
            empNo: 110,
            empName: "Rocky",
            job: "Negotiator",
            salary: 51000,
            mobileNo: "84******41",
            emailId: "rockystar2025x@gmail.com",
        },
    ];

    const [empslist, setEmplist] = useState([...emps]);
    const [DialogOpenFlag, setDialogOpenFlag] = useState(false);
    const [delteingEmpno, setDeleteingEmpno] = useState("");

    const del = (empNo) => {
        // const list = empslist.filter((emp) => emp.empNo !== empNo);
        // setEmplist(list);
        setDialogOpenFlag(true);
        setDeleteingEmpno(empNo);
    };
    const yes = () => {
        setDialogOpenFlag(false);
        const list = empslist.filter((emp) => emp.empNo !== delteingEmpno);
        setEmplist(list);
    };
    const no = () => {
        setDialogOpenFlag(false);
    };
    return (
        <>
            <div className="text-center my-0">
                <h3>Employees List App</h3>
                <table className="table table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>Employee No.</th>
                            <th>Employee Name</th>
                            <th>Job</th>
                            <th>Salary</th>
                            <th>Mobile</th>
                            <th>Email ID</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empslist.map((emp) => (
                            <tr key={emp.empNo}>
                                <td>{emp.empNo}</td>
                                <td>{emp.empName}</td>
                                <td>{emp.job}</td>
                                <td>{emp.salary}</td>
                                <td>{emp.mobileNo}</td>
                                <td>{emp.emailId}</td>
                                <td>
                                    <button className="btn btn-primary me-3">
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => del(emp.empNo)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Dialog open={DialogOpenFlag}>
                    <DialogTitle>Delete Caution</DialogTitle>
                    <DialogContent>
                        Do you want to delete this employee ?
                    </DialogContent>
                    <DialogActions>
                        <Button className="btn btn-danger" onClick={yes}>
                            Delete
                        </Button>
                        <Button className="btn btn-primary" onClick={no}>
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    );
}
