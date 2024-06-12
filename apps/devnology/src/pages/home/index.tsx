import { useEffect, useRef } from 'react';
import { useAppListQuery } from '@/store/queries/useAppData';

import Card from '@/components/card';
import StyledLoadingDiv from '@/components/common/styled/StyledLoadingDiv';
import StyledErrorDiv from '@/components/common/styled/StyledErrorDiv';
import useIntersectionObserver from './useIntersectionObserver';

const Dashboard = () => {
  const { data: apps, isLoading, isError } = useAppListQuery();

  const observerRef = useRef(null);
  const [observe/*, unobserve*/] = useIntersectionObserver(() => {
    console.log('Intersection Observer callback called');

    // pagination logic here

    // if there is no data from api. unobserve the observer
  });

  useEffect(() => {
    console.log('###');

    observerRef.current && observe(observerRef.current);
  }, [apps]);

  if (isLoading) {
    return <StyledLoadingDiv>Fetching App Data...</StyledLoadingDiv>;
  }

  if (isError) {
    return <StyledErrorDiv>Error ......</StyledErrorDiv>;
  }

  return (
    <div className="home_container" style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)' }}>
      <div>
        <div style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden', flexWrap: 'wrap' }}>
          {apps &&
            apps
              .filter((app) => app.publish === true)
              .map((app) => (
                <Card
                  key={app.id}
                  type={app.type || ''}
                  id={app.id || ''}
                  title={app.title || ''}
                  desc={app.desc || ''}
                  thumbnail={app.thumbnail || ''}
                  created={app.created || ''}
                  updated={app.updated || ''}
                />
              ))}
        </div>
      </div>

      <div ref={observerRef} id="observer" style={{ height: "50px", marginBottom: "10px" }}></div>
    </div>
  );
};

export default Dashboard;
