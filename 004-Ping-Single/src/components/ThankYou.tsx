type ThankYouProps = {
  email: string;
};

export function ThankYou({ email }: ThankYouProps) {
  return (
    <>
      <h1 className="text-center font-semibold">Thank you for your trust</h1>
      <p className="font-serif">
        We'll notify at <span className="font-bold italic">{email}</span> <br />
        as soon as we launch!
      </p>
    </>
  );
}
