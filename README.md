# WebAuthn credential ID sniffer

Simple Browser Extension that logs rpID and credentialIDs known to a visited Relying Party when creating assertions.

It works by intercepting WebAuthn API calls (specifically: `navigator.credentials.get`).
Use only for debugging purposes!

# Install

To load the extension into Chrome:

- Open Chrome and go to chrome://extensions/.
- Enable "Developer mode" in the top right corner.
- Click on "Load unpacked" and select the directory containing your extension files.


# Use

Enable or disable from the extensions page of your browser.
Example:

    chrome://extensions/

Open your Console log and visit a a Relying Party where you have registered a FIDO credential.

Example log:

```
allowedCredentials for demo.yubico.com
[
	{
		"id": "0btIxeUqzrokupJLFZeZPvXgx2jpY0ZcVBU4GJWURC2DzcdZB5/ENZmz20ufPwnHpnpKmAszpi0v28RakZqlgw==",
		"type": "public-key"
	},
	{
		"id": "YWzQHdCFweuigK267Zq2k+rZ6QIGOEBHMlydn9UaDm0I3nEok1P2afn4TajM3UQGHVBuGV6JY6jb440MgAnNnQ==",
		"type": "public-key"
	},
	{
		"id": "HOuf3mA8dSyGv2xcmsNEp2XvuuYA/fvp0CxHlulxya7WOOSTrxwXXa2ntqvHcKOCrQqTqrrJrqGAozeW36M34dZswyNi4TxVuuR9e0eWmEnoHq8h/1VN2rzD+bdrippdX5oN8g9MmO5aAEczwyPpvFO4+gS7nJx0To81XjBzvX0=",
		"type": "public-key"
	}
]
```
