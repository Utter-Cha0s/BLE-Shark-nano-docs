---
title: Captive Portal
---

This guide helps you create your own custom HTML-based captive portals for use with the BLEShark Nano.  
You can fully control the user experience - from styling to data submission - using simple HTML + JS.

## Basic Requirements

To ensure compatibility with BLEShark Nano's firmware, your captive portal must:

- Use standard HTML
- Collect form input data using `input`, `checkbox`, `select`, etc.
- Send a `POST` request to `/sendJSON` with valid JSON.
- **Include the field `savetostorage`** (lowercase!) if you want the BLEShark Nano to persist the config

## Minimal Working Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>BLEShark Portal</title>
</head>
<body>
  <h2>Wi-Fi Setup</h2>

  <label>Wi-Fi Name:
    <input type="text" id="ssid" />
  </label><br><br>

  <label>Password:
    <input type="password" id="pwd" />
  </label><br><br>

  <label>Save to BLEShark storage?
    <input type="checkbox" id="savetostorage" />
  </label><br><br>

  <button onclick="submitJSON()">Submit</button>

  <script>
    function submitJSON() {
      const jsonData = {
        ssid: document.getElementById("ssid").value,
        pwd: document.getElementById("pwd").value,
        savetostorage: document.getElementById("savetostorage").checked
      };

      fetch('/sendJSON', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jsonData)
      })
      .then(res => {
        if (!res.ok) throw new Error("Server error");
        alert("Settings sent successfully!");
      })
      .catch(err => {
        alert("Failed to send settings.");
        console.error(err);
      });
    }
  </script>
</body>
</html>
```
## JSON Structure

The BLEShark Nano expects the form data to be structured like this:
```json
{
  "ssid": "MyNetwork",
  "pwd": "hunter2",
  "savetostorage": true
}
```

- Any keys can be used - but savetostorage must be present
- savetostorage: true tells the BLEShark to save the config permanently
- Without it, the data will be used once and discarded after reboot

:::tip
Make sure all input fields have unique IDs.
:::

And that's about it. Enjoy creating your captive portals!
:::danger[Legal Disclaimer]
The Captive Portal is intended for educational use in controlled environments.  
Never use it to capture real user credentials or impersonate real websites.

Misuse may result in criminal charges, privacy violations, or fines under cybersecurity law.  
InfiShark Technologies Inc. does not support or take responsibility for unauthorized deployments of this feature.
:::
