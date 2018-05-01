var playlist = { 'Britney Spears': 'Oops!...I Did It Again' }

function updatePlaylist(obj, artistName, songTitle) {
  obj[artistName] = songTitle;
  return obj;
}

function removeFromPlaylist(obj, artistName) {
  var artistName = 'artistName'
  delete obj.artistName;
  return obj;
}

console.log(removeFromPlaylist(playlist, 'Britney Spears'))