interface IInputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function InputField(props: IInputFieldProps) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input {...props} />
    </div>
  );
}
