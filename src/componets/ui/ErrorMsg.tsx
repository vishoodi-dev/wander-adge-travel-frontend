type ErrorMsgProps = {
  errorMsg?: string;
  id?: string;
};

function ErrorMsg({ errorMsg, id }: ErrorMsgProps) {
  return (
    <div className="text-start mt-1">
      <p
        id={id}
        className="mt-1 min-h-[20px] text-sm text-red-600"
        role={errorMsg ? 'alert' : undefined}
      >
        {errorMsg ?? ''}
      </p>
    </div>
  );
}

export default ErrorMsg;
