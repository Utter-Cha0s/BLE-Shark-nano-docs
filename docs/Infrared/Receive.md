import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The **Receive** app lets you record infrared (IR) signals from any remote control and store them on your BLEShark Nano.  
These commands can later be replayed using the Transmit or Remote apps.

### How to Use the Receive App

<Tabs>
  <TabItem value="tv" label="TV Remotes">
<ul className="step-list">
  <li>Open the <strong>Receive</strong> app.</li>
  <li>Select the remote slot where you'd like to store commands.</li>
  <li>Point your TV remote at the IR receiver (top-left corner of the device).</li>
  <li>The screen will prompt you to press a specific button.</li>
  <li>Press the corresponding button on your remote to record it.</li>
  <li>Repeat until all needed buttons are saved.</li>
</ul>
  </TabItem>

<TabItem value="other" label="Other Remotes">
<ul className="step-list">
  <li>Open the <strong>Receive</strong> app.</li>
  <li>Select any available slot.</li>
  <li>Point the IR remote at your BLEShark Nano.</li>
  <li>Press the button you want to record.</li>
</ul>

  <strong>Use on-screen options:</strong>
  <ul>
    <li><strong>[L]</strong> to retry</li>
    <li><strong>[S]</strong> to send</li>
    <li><strong>[R]</strong> to save</li>
  </ul>
</TabItem>


</Tabs>

### Tips for Best Results

- Keep the remote within 20 cm of the BLEShark Nano when recording.
- Avoid direct sunlight or bright lighting during capture.
- Each saved remote can store multiple commands.

:::warning[Incompatible Remotes]
Some smart TV remotes use Bluetooth or Wi-Fi Direct instead of infrared.  
These cannot be recorded with the Receive app.
:::
