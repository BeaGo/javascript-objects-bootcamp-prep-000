var playlist = { 'Britney Spears': 'Oops!...I Did It Again' }

function updatePlaylist(obj, artistName, songTitle) {
  obj[artistName] = songTitle;
  return obj;
}

function removeFromPlaylist(playlist, artistName) {
  var poop = [artistName]
  var blah = poop[0]
 delete playlist.blah
 return playlist
}

console.log(removeFromPlaylist(playlist, 'Britney Spears'))