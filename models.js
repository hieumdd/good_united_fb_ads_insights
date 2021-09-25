const mongoose = require('mongoose');

const { Schema } = mongoose;

const actionBreakdowns = {
  action_type: String,
  value: Number,
};

export const fbAdsSchema = new Schema({
  date_start: { type: Date, required: true },
  date_stop: { type: Date, required: true },
  account_id: { type: Number, required: true },
  campaign_id: { type: Number, required: true },
  adset_id: { type: Number, required: true },
  ad_id: { type: Number, required: true },
  account_name: String,
  campaign_name: String,
  adset_name: String,
  ad_name: String,
  account_currency: String,
  actions: actionBreakdowns,
  action_values: actionBreakdowns,
  clicks: Number,
  conversion_rate_ranking: String,
  conversion_values: actionBreakdowns,
  conversions: actionBreakdowns,
  cost_per_action_type: actionBreakdowns,
  cost_per_conversion: actionBreakdowns,
  cost_per_unique_action_type: actionBreakdowns,
  cost_per_unique_click: Number,
  cpc: Number,
  cpm: Number,
  ctr: Number,
  engagement_rate_ranking: String,
  frequency: Number,
  impressions: Number,
  inline_link_click_ctr: Number,
  inline_link_clicks: Number,
  objective: String,
  optimization_goal: String,
  quality_ranking: String,
  reach: Number,
  spend: Number,
  unique_actions: actionBreakdowns,
  unique_clicks: Number,
  unique_ctr: Number,
  unique_link_clicks_ctr: Number,
  video_30_sec_watched_actions: actionBreakdowns,
  video_p100_watched_actions: actionBreakdowns,
  video_p25_watched_actions: actionBreakdowns,
  video_p50_watched_actions: actionBreakdowns,
  video_p75_watched_actions: actionBreakdowns,
  video_p95_watched_actions: actionBreakdowns,
});

export const FacebookAdsInsights = mongoose.model(
  'FacebookAdsInsightsRaw',
  fbAdsSchema
);

const x = Object.entries(fbAdsSchema.obj).filter((i) => i[1].required);
x;