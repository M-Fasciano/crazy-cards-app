export const handleSelectCard = (
  e,
  index,
  credit,
  selected,
  setSelected,
  setCredit
) => {
  const creditAvailable = e.target.getAttribute("data-credit");
  const newCredit = credit + parseInt(creditAvailable);
  const updatedCredit = credit - parseInt(creditAvailable);
  const idx = selected.indexOf(index);

  if (selected.indexOf(index) === -1) {
    setSelected([...selected, index]);
    setCredit(newCredit);
  } else if (idx > -1) {
    selected.splice(idx, 1);
    setCredit(updatedCredit);
  }
};
