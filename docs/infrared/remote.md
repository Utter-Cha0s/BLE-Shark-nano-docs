---
title: Remote
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The **IR Remote** app provides a faster way to control TVs, AC units, and other devices using infrared commands you’ve already recorded. Instead of selecting each command manually, you trigger them instantly using button shortcuts. This makes it much faster and more convenient than using the traditional **Transmit** app.

### How to Use the IR Remote App

<Tabs>
  <TabItem value="shortcuts" label="Using Shortcuts">
<ul className="step-list">
  <li>Open the <strong>IR Remote</strong> app from the main menu.</li>
  <li>Aim the BLEShark Nano at your target device.</li>
  <li>Press a button combination (like <strong>[L]</strong>, <strong>[R]</strong>, or <strong>[S]</strong>) to send a shortcut command.</li>
  <li>Each combo triggers an IR signal immediately.</li>
</ul>
  </TabItem>

  <TabItem value="reference" label="Shortcut Reference">
<ul className="step-list">
  <li>Hold <strong>[S] + [R]</strong> inside the IR Remote app to view your shortcut list on the device.</li>
  <li>Press <strong>[S]</strong> to close the guide and return to the app.</li>
  <li>You can also view the shortcut layout online in the <a href="/docs/Misc/Shortcut%20Guide">Shortcut Guide</a>.</li>
</ul>
  </TabItem>
</Tabs>

### Tips for Best Results

- Aim the BLEShark Nano directly at the target device’s IR sensor.  
- Make sure you’ve already saved commands using the **Receive** app.  
- IR signals work best indoors. Avoid strong light, sunlight, or reflective surfaces.

:::warning[Missing Commands?]
If a shortcut does nothing, it's likely that no IR signal was recorded for that combination.  
Open the **Receive** app to capture it, then try again in IR Remote.
:::
