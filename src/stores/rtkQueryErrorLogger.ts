import { MiddlewareAPI, isFulfilled, Middleware } from '@reduxjs/toolkit';

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
  // if (isFulfilled(action)) {
  //   const { response } = action.payload;
  //   switch (response.output) {
  //     case -100: // 알 수 없는 오류
  //       break;
  //     case -99: // 토큰 타입 맞지 않음
  //       break;
  //     case -77: // 토큰 지원 형식 맞지않음
  //       break;
  //     case -66: // 토큰 틀림
  //       break;
  //     case -33: // 쿼리 실행 오류
  //       break;
  //     case -22: // 맞지 않는 파라미터
  //       break;
  //     case -11: // 결과 없음
  //       break;
  //     default:
  //       break;
  //   }
  // }

  return next(action);
};
