/**
 * Copyright (C) SkillworksIT Solutions Pvt Ltd - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skillworks IT <contact@skillworksit.com>, Aug 2024
 */

const gCtrl = require('../controllers/B2bEuGoalsCtrl');

module.exports.controller = (app) => {

  app.get('/', gCtrl.apiServerStatus);

  app.post('/ctpb2b/v1/eu/goal/list', gCtrl.getB2bEuGoalList);
  app.post('/ctpb2b/v1/eu/goal/create', gCtrl.postB2bEuGoalCreate);
  app.put('/ctpb2b/v1/eu/goal/update/:recordId', gCtrl.putB2bEuGoalUpdate);
  app.put('/ctpb2b/v1/eu/goal/status/update/:recordId', gCtrl.putB2bEuGoalStatusUpdate);
  app.put('/ctpb2b/v1/eu/goal/review/create/:recordId', gCtrl.posttB2bEuGoalRvwCreateUpdate);
  app.put('/ctpb2b/v1/eu/goal/delete/:recordId', gCtrl.puttB2bEuGoalRvwDelete);
  app.post('/ctpb2b/v1/eu/goal/lifecycle/list/:recordId', gCtrl.getB2bEuGoallifeCylceList);

}