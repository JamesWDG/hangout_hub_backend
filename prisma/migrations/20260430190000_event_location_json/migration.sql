-- AlterTable: store event location as JSON object (legacy plain text becomes { "address": "<text>" })
ALTER TABLE "EventPost" ALTER COLUMN "eventLocation" SET DATA TYPE JSONB USING (
  jsonb_build_object('address', "eventLocation")
);
