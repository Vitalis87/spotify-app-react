export interface IArtistDetails {
    artists: Artists;
    albums: Albums2;
    songs: Songs;
  }
  
  interface Songs {
    '1441133277': _1441133277;
    '1441133613': _1441133277;
    '1441133632': _1441133277;
    '1441133644': _1441133277;
    '1441133834': _1441133277;
    '1441163771': _1441133277;
    '1441164430': _1441133277;
    '1441164536': _1441133277;
    '1441164589': _1441133277;
    '1441164738': _1441133277;
    '1441164805': _1441133277;
    '1441164806': _1441133277;
    '1441164829': _1441133277;
    '1441165136': _1441133277;
    '1474815799': _1474815799;
    '1474815801': _1474815799;
    '1474815898': _1474815799;
    '1474833934': _1474815799;
    '1573250861': _1474815799;
    '1582223667': _1474815799;
  }
  
  interface _1474815799 {
    id: string;
    type: string;
    href: string;
    attributes: Attributes6;
  }
  
  interface _1441133277 {
    id: string;
    type: string;
    href: string;
    attributes: Attributes6;
    meta: Meta2;
  }
  
  interface Meta2 {
    formerIds: string[];
  }
  
  interface Attributes6 {
    albumName: string;
    hasTimeSyncedLyrics: boolean;
    genreNames: string[];
    trackNumber: number;
    durationInMillis: number;
    releaseDate: string;
    isMasteredForItunes: boolean;
    isrc: string;
    artwork: Artwork;
    audioLocale: string;
    composerName: string;
    playParams: PlayParams;
    url: string;
    discNumber: number;
    hasLyrics: boolean;
    isAppleDigitalMaster: boolean;
    audioTraits: string[];
    name: string;
    previews: Preview[];
    artistName: string;
  }
  
  interface Preview {
    url: string;
  }
  
  interface Albums2 {
    '1436905161': _1436905161;
    '1440833098': _1440833098;
    '1441132965': _1436905161;
    '1441133100': _1436905161;
    '1441133180': _1436905161;
    '1441133181': _1436905161;
    '1441133389': _1436905161;
    '1441163490': _1436905161;
    '1441164359': _1436905161;
    '1441164362': _1436905161;
    '1441164416': _1436905161;
    '1441164426': _1436905161;
    '1441164495': _1436905161;
    '1441164524': _1436905161;
    '1441164525': _1436905161;
    '1441164604': _1436905161;
    '1441164670': _1436905161;
    '1441164816': _1436905161;
    '1441165005': _1436905161;
    '1474815798': _1440833098;
    '1474833332': _1436905161;
    '1573250333': _1440833098;
    '1582219768': _1436905161;
    '1642995371': _1642995371;
    '1643394501': _1642995371;
  }
  
  interface _1642995371 {
    id: string;
    type: string;
    href: string;
    attributes: Attributes5;
  }
  
  interface Attributes5 {
    copyright: string;
    genreNames: string[];
    releaseDate: string;
    isMasteredForItunes: boolean;
    upc: string;
    artwork: Artwork;
    playParams: PlayParams;
    url: string;
    recordLabel: string;
    isCompilation: boolean;
    trackCount: number;
    isPrerelease: boolean;
    audioTraits: string[];
    isSingle: boolean;
    name: string;
    artistName: string;
    editorialNotes: EditorialNotes2;
    isComplete: boolean;
  }
  
  interface EditorialNotes2 {
    standard: string;
    short: string;
    tagline: string;
  }
  
  interface _1440833098 {
    id: string;
    type: string;
    href: string;
    attributes: Attributes4;
  }
  
  interface Attributes4 {
    copyright: string;
    genreNames: string[];
    releaseDate: string;
    isMasteredForItunes: boolean;
    upc: string;
    artwork: Artwork;
    playParams: PlayParams;
    url: string;
    recordLabel: string;
    isCompilation: boolean;
    trackCount: number;
    isPrerelease: boolean;
    audioTraits: string[];
    isSingle: boolean;
    name: string;
    artistName: string;
    isComplete: boolean;
  }
  
  interface _1436905161 {
    id: string;
    type: string;
    href: string;
    attributes: Attributes3;
  }
  
  interface Attributes3 {
    copyright: string;
    genreNames: string[];
    releaseDate: string;
    upc: string;
    isMasteredForItunes: boolean;
    artwork: Artwork;
    url: string;
    playParams: PlayParams;
    recordLabel: string;
    isCompilation: boolean;
    trackCount: number;
    isPrerelease: boolean;
    audioTraits: string[];
    isSingle: boolean;
    name: string;
    artistName: string;
    editorialNotes: EditorialNotes;
    isComplete: boolean;
  }
  
  interface EditorialNotes {
    standard: string;
    short: string;
  }
  
  interface PlayParams {
    id: string;
    kind: string;
  }
  
  interface Artists {
    '136975': _136975;
  }
  
  interface _136975 {
    id: string;
    type: string;
    href: string;
    attributes: Attributes;
    relationships: Relationships;
    views: Views;
    meta: Meta;
  }
  
  interface Meta {
    views: Views2;
  }
  
  interface Views2 {
    order: string[];
  }
  
  interface Views {
    'top-songs': Topsongs;
    'latest-release': Latestrelease;
  }
  
  interface Latestrelease {
    href: string;
    attributes: Attributes2;
    data: Datum[];
  }
  
  interface Topsongs {
    href: string;
    next: string;
    attributes: Attributes2;
    data: Datum[];
  }
  
  interface Attributes2 {
    title: string;
  }
  
  interface Relationships {
    albums: Albums;
  }
  
  interface Albums {
    href: string;
    next: string;
    data: Datum[];
  }
  
  interface Datum {
    id: string;
    type: string;
    href: string;
  }
  
  interface Attributes {
    genreNames: string[];
    name: string;
    artwork: Artwork;
    url: string;
  }
  
  interface Artwork {
    width: number;
    url: string;
    height: number;
    textColor3: string;
    textColor2: string;
    textColor4: string;
    textColor1: string;
    bgColor: string;
    hasP3: boolean;
  }