declare module '*.png' {
    const content: any;
    export default content;
}

declare module '*.jpg' {
    import { ImageSourcePropType } from 'react-native';
    const value: ImageSourcePropType;
    export default value;
}