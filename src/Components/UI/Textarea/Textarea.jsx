import classes from './Textarea.module.css';

const Textarea = ({error, ...props}) => {
  return (
    <div className={classes.field}>
      <textarea
        className={`${classes.input} text-sm ${error ? classes.error : ''}`}
        {...props}
      />
      {error && <span className={`${classes.errorText} text-sm`}>{error}</span>}
    </div>
  );
};

export default Textarea;
