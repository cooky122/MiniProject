const DateFormat = ({date}) => {
  const today = new Date(date);
  return(
    <>{`${today.getFullYear()}. ${today.getMonth() + 1}. ${today.getDate()}.`}</>
  )
}

export default DateFormat;  