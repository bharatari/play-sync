<style>
  button {
    height: 30px;
    width: 30px;
    outline: none;
  }
</style>

<script>
  import Storage from './helpers/storage';

  export let partyState;
  export let partyId = Storage.get('partyId');

  chrome.runtime.onMessage.addListener((request) => {
    partyState = request;
  });

  async function handleClick(e) {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tab) {
      // get from party state
      chrome.tabs.update(tab.id, { url: myNewUrl });
    });
  }

  async function handleSubmit(e) {
    const partyId = document.getElementById("partyId").value;

    await Storage.set('partyId', partyId);
  }
</script>

<div>
  <form on:submit|preventDefault={handleSubmit}>
    <input bind:value={partyId} type="text" placeholder="Party ID" />
    <button type="submit">Submit</button>
  </form>
  <button on:click={handleClick}>Go to URL</button>
</div>
