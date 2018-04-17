import db from './models';

let candidates = {};

candidates.index = async function(ctx, next) {
  ctx.status = 200;
  ctx.body = {
    candidates: await db.Candidate.find({})
  }
}

candidates.show = async function(ctx, next) {
  ctx.status = 200;
}

candidates.create = async function(ctx, next) {
  ctx.status = 201;
}

candidates.update = async function(ctx, next) {
  ctx.status = 200;
}

export default { candidates };