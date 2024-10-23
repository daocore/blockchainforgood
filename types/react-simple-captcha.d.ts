declare module "react-simple-captcha" {
  export function loadCaptchaEnginge(length: number): void;
  export function validateCaptcha(user_captcha: string): boolean;
  export function LoadCanvasTemplate(props: {
    reloadText?: string;
    reloadColor?: string;
  }): JSX.Element;
  export function LoadCanvasTemplateNoReload(): JSX.Element;
}
