export const formatDate = (date) => {
    if (!date || isNaN(new Date(date).getTime())) {
      return "";
    }
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${day}.${month}.${year}`;
  };
  
  export const toHtmlDateFormat = (dateString) => {
    if (!dateString) return "";
    const [day, month, year] = dateString.split(".");
    return `${year}-${month}-${day}`;
  };