export default abstract class AsyncHandlerP {
  public static handler(func: any) {
    return (req: any, res: any, next: any) => {
      func(req, res, next).catch((err: any) => next(err));
    };
  }
}
