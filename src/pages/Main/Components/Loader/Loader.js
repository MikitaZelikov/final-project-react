import './loader.scss';
import { useSelector } from 'react-redux';

const getLoading = (state) => state.moviesData.isLoading;

function Loader() {
  const dataLoading = useSelector(getLoading);

  let loader = 'loader';
  if (dataLoading) loader += ' loader--visible';

  return (
    <div className={loader}></div>
  );
}

export default Loader;
