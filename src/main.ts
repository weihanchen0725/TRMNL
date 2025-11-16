import './style.css'
import qrWifiImage from './assets/images/QR_WiFi.png'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <img src="${qrWifiImage}" alt="WiFi QR Code" />
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
