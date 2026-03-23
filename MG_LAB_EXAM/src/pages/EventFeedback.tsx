import { useRef, type FormEvent } from "react";

function EventFeedback() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const feedbackRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nameRef.current || !emailRef.current || !feedbackRef.current) return;

    if (!nameRef.current.value || !emailRef.current.value || !feedbackRef.current.value) {
      alert("Please fill in all fields.");
      return;
    }

    alert(`Thank you, ${nameRef.current.value}, for your feedback! Check console for details.`);
    console.log("Event Feedback Submitted:", {
      name: nameRef.current.value,
      email: emailRef.current.value,
      feedback: feedbackRef.current.value
    });

    // Clear inputs
    nameRef.current.value = "";
    emailRef.current.value = "";
    feedbackRef.current.value = "";
  };

  return (
    <div>
      <h1 className="page-title">Event Feedback</h1>
      <p className="page-text">Share your feedback on university events to improve future activities.</p>

      <form onSubmit={handleSubmit} style={{ maxWidth: "600px" }}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" ref={nameRef} />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" ref={emailRef} />
        </div>

        <div className="mb-3">
          <label className="form-label">Feedback</label>
          <textarea className="form-control" ref={feedbackRef} rows={4} />
        </div>

        <button type="submit" className="btn btn-primary">Submit Feedback</button>
      </form>
    </div>
  );
}

export default EventFeedback;