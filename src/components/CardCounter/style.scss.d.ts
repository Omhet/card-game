declare namespace StyleScssNamespace {
  export interface IStyleScss {
    column: string;
    doorImage: string;
    main: string;
    treasureImage: string;
  }
}

declare const StyleScssModule: StyleScssNamespace.IStyleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StyleScssNamespace.IStyleScss;
};

export = StyleScssModule;
