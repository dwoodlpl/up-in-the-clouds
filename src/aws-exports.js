const exp = {
  aws_project_region: process.env.project_region,
  aws_cognito_identity_pool_id: process.env.cognito_identity_pool_id,
  aws_cognito_region: process.env.project_region,
  aws_user_pools_id: process.env.user_pools_id,
  aws_user_pools_web_client_id: process.env.user_pools_web_client_id,
  mandatorySignIn: true,
  oauth: {
    domain: process.env.domain,
    scope: ["email", "profile", "openid", "aws.cognito.signin.user.admin"],
    responseType: "code", //'code' or 'token', note that REFRESH token will only be generated when the responseType is code
  },
};

export default exp;
