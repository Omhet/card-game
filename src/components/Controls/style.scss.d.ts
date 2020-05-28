declare namespace StyleScssNamespace {
  export interface IStyleScss {
    bottomLeft: string;
    bottomRight: string;
    main: string;
    topLeft: string;
    topRight: string;
  }
}

declare const StyleScssModule: StyleScssNamespace.IStyleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StyleScssNamespace.IStyleScss;
};

export = StyleScssModule;
