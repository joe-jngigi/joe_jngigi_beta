export type SideMenuContextType = {
    toggleSideMenu: boolean;
    settoggleSideMenu: React.Dispatch<React.SetStateAction<boolean>>;
    notificationDropdown: boolean;
    setNotificationDropdown: React.Dispatch<React.SetStateAction<boolean>>;
    toggleMenu: boolean;
    setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
    collapsePanel: boolean;
    setcollapsePanel: React.Dispatch<React.SetStateAction<boolean>>
};

export type TLayoutProp = {
    children: React.ReactNode
}

export interface Session {
    user?: {
      name?: string | null
      email?: string | null
      image?: string | null
    } 
  }

export type PostProps = {
    id?: number,
    className?: string,
    title?: string,
    description?: string,
    body?: string,
}
type StaticImport = {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
    blurWidth?: number;
    blurHeight?: number;
  };
  

export type TPostPropsExt = PostProps & {
    
    link: string,
}
export type TImagesPropsExt = PostProps & {
    
    link: StaticImport,
}

export type userType = {
    sessionId: number,
    name: string
} | null

/**@type  {userType} can be written like shown below, eliminating the null in the generic type call */
// export type userType = {
//     sessionId: number,
//     name: string
// } | null

export type productsProps ={
    99?:string,
    product_id?: number | string,
    product_name: string ,
    product_price: number |string,
    product_description: string,
    product_size: number |string,
    product_color: string
}

export type ThemeTypes ={
    themeValue: 'light' | 'dark'
}

export type AuthContextType = {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
};