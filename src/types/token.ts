export interface AccessTokenInfo {
  accessToken: string;
  refreshToken: string;
  ttl: number;
  expiresIn: number;
  tokenType: string;
}
