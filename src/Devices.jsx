import { use } from "react";
import Device from './Device';

export default function Devices({ fetchDevices }) {
  const devices = use(fetchDevices);

  return (
    <div className="card">
      <h3>All Devices: {devices.length}</h3>
      {
        devices.map(device => <Device key={device.id} device={device}></Device>)
      }
    </div>
  );
}
