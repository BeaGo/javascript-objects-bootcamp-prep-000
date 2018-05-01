var playlist = { 'Britney Spears': 'Oops!...I Did It Again' }

function updatePlaylist(obj, artistName, songTitle) {
  obj[artistName] = songTitle;
  return obj;
}

function removeFromPlaylist(playlist, artistName) {
  const poop = artistName;
  delete playlist.poop;
  return obj;
}

console.log(removeFromPlaylist(playlist, 'Britney Spears'))