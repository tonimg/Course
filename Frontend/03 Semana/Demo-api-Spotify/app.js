$('#search-artist').on('click', function (e) {
  e.preventDefault()
  var nameArtist = $('#artist-name').val()
  var urlSearchArtist = 'https://api.spotify.com/v1/search?type=artist&query=' + nameArtist
    // get Artist
  $.ajax({
    url: urlSearchArtist,
    success: function (data) {
      var artistsFound = data.artists.items
      var optionsArtists = '<option disabled selected>Select Artist</option>'
      artistsFound.forEach(function (artistData) {
        optionsArtists += '<option value="' + artistData.id + '">' + artistData.name + '</option>'
      })
      $('#artists-selection').html(optionsArtists)
      $('#artist-container-show').removeClass('hidden')
      $('#album-container-show').addClass('hidden')
      $('#song-container-show').addClass('hidden')
    }
  })
})

// get albums
$('#artists-selection').on('change', function (e) {
  var idArtist = $(this).val()
  var urlAlbums = 'https://api.spotify.com/v1/artists/' + idArtist + '/albums'
  $.ajax({
    url: urlAlbums,
    success: function (data) {
      var albumFound = data.items
      var optionsAlbum = '<option disabled selected>Select Album</option>'
      albumFound.forEach(function (albumData) {
        optionsAlbum += '<option data-image-album="' + albumData.images[1].url + '" value="' + albumData.id + '">' + albumData.name + '</option>'
      })
      $('#album-selection').html(optionsAlbum)
      $('#album-container-show').removeClass('hidden')
      $('#song-container-show').addClass('hidden')
    }
  })
})

// get songs
$('#album-selection').on('change', function (e) {
  var idAlbum = $(this).val()
  var coverAlbum = $(this).find('option:selected').data('image-album')
  $.ajax({
    url: 'https://api.spotify.com/v1/albums/' + idAlbum + '/tracks',
    success: function (data) {
      var songsList = data.items
      var showTrackList = ''
      songsList.forEach(function (songsData) {
        showTrackList += '<li class="list-group-item"><a target="_blank" href="' + songsData.preview_url + '">' + songsData.name + '</a></li>'
      })
      $('#album-image').attr('src', coverAlbum)
      $('#song-selection').html(showTrackList)
      $('#song-container-show').removeClass('hidden')
    }
  })
})
