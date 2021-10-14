declare namespace MusicKit {
  function getPlayerType(mediaItem: MediaItem): string

  interface API {
    music(request_uri: string): Promise<any>
  }

  interface Events {
    mediaItemStateDidChange: unknown
    nowPlayingItemDidChange: unknown
  }

  const Events: {
    [key in keyof Events]: key
  }

  interface MusicKitInstance {
    nowPlayingItem: MediaItem | undefined
    currentPlaybackDuration: number
    currentPlaybackProgress: number
    currentPlaybackTime: number
    currentPlaybackTimeRemaining: number
    volume: number
    queue: {
      position: number
      item(index: number): MediaItem | undefined
    }
    videoContainerElement: HTMLElement | undefined
  }
}

declare namespace JSX {
  interface IntrinsicElements {
    'apple-music-artwork': any
    'apple-music-playback-controls': any
    'apple-music-progress': any
    'apple-music-volume': any
  }
}
