# Stripe Webhook Setup Instructions

Now that the code only saves to Google Sheets **after** payment, you need to configure a Stripe webhook.

## Step 1: Deploy Your Google Apps Script

1. Open your Google Apps Script project
2. Click **Deploy** > **New deployment**
3. Select type: **Web app**
4. Execute as: **Me**
5. Who has access: **Anyone**
6. Click **Deploy**
7. **Copy the Web App URL** (you'll need it in Step 2)

## Step 2: Configure Stripe Webhook

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/)
2. Click **Developers** > **Webhooks**
3. Click **Add endpoint**
4. Paste your **Web App URL** from Step 1
5. Click **Select events**
6. Search for and select: `payment_intent.succeeded`
7. Click **Add events**
8. Click **Add endpoint**

## Step 3: Add Webhook Secret to Script Properties

1. On the webhook details page, click **Reveal** next to "Signing secret"
2. Copy the secret (starts with `whsec_...`)
3. Go back to your Google Apps Script
4. Click on the **Project Settings** (gear icon)
5. Scroll to **Script Properties**
6. Click **Add script property**
   - Property: `STRIPE_WEBHOOK_SECRET`
   - Value: (paste the webhook secret)
7. Click **Save**

## Step 4: Test It

1. Submit a test registration on your site
2. Complete payment with test card: `4242 4242 4242 4242`
3. Check your Google Sheet - the data should appear within a few seconds
4. Check the Debug sheet for webhook logs

## Troubleshooting

- **No data appearing**: Check the Debug sheet for webhook errors
- **Webhook not being called**: Verify the Web App URL is correct in Stripe
- **Permission errors**: Make sure the web app is deployed with "Execute as: Me" and "Anyone" access
