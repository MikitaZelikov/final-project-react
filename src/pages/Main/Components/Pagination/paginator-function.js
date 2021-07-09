export default function getVirtualPage(activePage, statePage) {
  switch (activePage) {
    case 'first':
      if (statePage !== 1) {
        return 1;
      }
      return statePage;
    case 'last':
      if (statePage !== 10) {
        return 10;
      }
      return statePage;
    case 'prev':
      if (statePage === 1) {
        return statePage;
      }
      return statePage - 1;
    case 'next':
      if (statePage === 10) {
        return statePage;
      }
      return statePage + 1;
    default:
      if (!activePage) {
        return statePage;
      }
      return +activePage;
  }
}
