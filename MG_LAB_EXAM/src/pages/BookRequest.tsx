import { useState, type ChangeEvent, type FormEvent } from "react";

interface BookRequestData {
  studentName: string;
  studentId: string;
  bookTitle: string;
  author: string;
  reason: string;
}

function BookRequest() {
  const [studentName, setStudentName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [reason, setReason] = useState("");
  const [submittedRequests, setSubmittedRequests] = useState<BookRequestData[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!studentName || !studentId || !bookTitle || !author || !reason) {
      alert("Please fill in all fields.");
      return;
    }

    const newRequest: BookRequestData = {
      studentName,
      studentId,
      bookTitle,
      author,
      reason
    };

    setSubmittedRequests([...submittedRequests, newRequest]);
    setStudentName("");
    setStudentId("");
    setBookTitle("");
    setAuthor("");
    setReason("");
  };

  return (
    <div>
      <h1 className="page-title">Book Request</h1>
      <p className="page-text">Submit a request for books not currently available in the library.</p>

      <form onSubmit={handleSubmit} style={{ maxWidth: "600px" }}>
        <div className="mb-3">
          <label className="form-label">Student Name</label>
          <input type="text" className="form-control" value={studentName} onChange={(e: ChangeEvent<HTMLInputElement>) => setStudentName(e.target.value)} />
        </div>

        <div className="mb-3">
          <label className="form-label">Student ID</label>
          <input type="text" className="form-control" value={studentId} onChange={(e: ChangeEvent<HTMLInputElement>) => setStudentId(e.target.value)} />
        </div>

        <div className="mb-3">
          <label className="form-label">Book Title</label>
          <input type="text" className="form-control" value={bookTitle} onChange={(e: ChangeEvent<HTMLInputElement>) => setBookTitle(e.target.value)} />
        </div>

        <div className="mb-3">
          <label className="form-label">Author</label>
          <input type="text" className="form-control" value={author} onChange={(e: ChangeEvent<HTMLInputElement>) => setAuthor(e.target.value)} />
        </div>

        <div className="mb-3">
          <label className="form-label">Reason</label>
          <textarea className="form-control" value={reason} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setReason(e.target.value)} rows={3} />
        </div>

        <button type="submit" className="btn btn-primary">Submit Request</button>
      </form>

      {submittedRequests.length > 0 && (
        <div className="mt-4">
          <h3>Submitted Requests</h3>
          {submittedRequests.map((req, i) => (
            <div key={i} className="border p-3 mb-2">
              <p><strong>Name:</strong> {req.studentName}</p>
              <p><strong>ID:</strong> {req.studentId}</p>
              <p><strong>Book:</strong> {req.bookTitle}</p>
              <p><strong>Author:</strong> {req.author}</p>
              <p><strong>Reason:</strong> {req.reason}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BookRequest;