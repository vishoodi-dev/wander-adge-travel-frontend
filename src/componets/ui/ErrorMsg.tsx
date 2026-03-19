type ErrorMsgProps = {
  errorMsg?: string;
};

const ErrorMsg = ({ errorMsg }: ErrorMsgProps) => {
  if (!errorMsg) return null;

  return (
    <div className="mt-1 text-start">
        <p className="mt-1 text-sm text-red-600">
      {errorMsg}
    </p></div>
    
  );
};

export default ErrorMsg;