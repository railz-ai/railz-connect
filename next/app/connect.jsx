'use client';

import { useEffect, useRef } from 'react';
import RailzConnect from '@railzai/railz-connect';

const rConnect = new RailzConnect();

const mountRailzConnect = (parentElement) => {
  const params = new URLSearchParams(document.location.search);
  const widgetId = params.get('widgetId') || process.env.NEXT_PUBLIC_RAILZ_CONNECT_ID;
  if(!widgetId) throw new Error('Missing widgetId - You need to provide a widget ID. You can find it in the Railz dashboard.');
  // If you see this error, you need to provide a widget ID. You can find it in the Railz dashboard.
  
  const businessName = params.get('businessName') || `NextJS_Test_${Date.now()}`;
  // you can pass a business name to the widget to prefill the business name field, 
  // or leave empty and Railz will generate a random name
  rConnect.mount({
    parentElement,
    widgetId,
    businessName,
    endpoint: 'https://auth.qa.railz.ai'
  });
};

const unmountRailzConnect = () => rConnect.unmount();


export function RailzButton() {
  const ref = useRef(null);
  
  useEffect(()=>{
    mountRailzConnect(ref.current);
    
    return ()=> {
      unmountRailzConnect();
    }
  },[])

  return (
      <div id='railz-connect' ref={ref} />
  );
}

export default RailzButton;
