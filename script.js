
function handleQuoteSubmit(e){
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  const subject = encodeURIComponent('Booking Request – AP Pro Detailing Services');
  const bodyLines = [];
  for (const [k,v] of data.entries()){bodyLines.push(`${k}: ${v}`)}
  const body = encodeURIComponent(bodyLines.join('\n'));
  window.location.href = `mailto:alex_jacquez@yahoo.com?subject=${subject}&body=${body}`;
  return false;
}
