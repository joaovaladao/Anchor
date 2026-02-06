/*
  # Insert Products Data (FK Constraint Workaround)

  1. Purpose
    - Insert products using direct database operations
    - Works around foreign key constraints by using service role access
    - Products will reference seller user ID that can be created later
*/

DO $$
DECLARE
  seller_id uuid := '550e8400-e29b-41d4-a716-446655440001'::uuid;
BEGIN
  INSERT INTO products (seller_id, title, description, category, price, currency, image_url, latitude, longitude, location_label, is_active, is_mobile_seller)
  VALUES
    (seller_id, 'Fresh Mango Assortment', 'Golden, ripe mangoes picked fresh this morning from our island orchard.', 'Food & Drinks', 8.50, 'USD', 'https://images.pexels.com/photos/262294/pexels-photo-262294.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop', 18.2208, -63.0502, 'Maria''s Island Orchard', true, false),
    (seller_id, 'Handwoven Basket', 'Authentic woven basket made by local artisans using traditional techniques.', 'Handmade & Crafts', 24.00, 'USD', 'https://images.pexels.com/photos/3714895/pexels-photo-3714895.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop', 18.2208, -63.0502, 'Caribbean Crafts Co.', true, false),
    (seller_id, 'Coconut Oil (1L)', 'Cold-pressed virgin coconut oil from local palm plantations.', 'Food & Drinks', 12.00, 'USD', 'https://images.pexels.com/photos/5938231/pexels-photo-5938231.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop', 18.2208, -63.0502, 'Tropical Essentials', true, false),
    (seller_id, 'Fish Catch of the Day', 'Fresh catch from this morning''s fishing trip. Cleaned and ready to cook.', 'Food & Drinks', 16.50, 'USD', 'https://images.pexels.com/photos/5737445/pexels-photo-5737445.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop', 18.2300, -63.0400, 'Captain João''s Catch', true, true),
    (seller_id, 'Lobster Tail (1pc)', 'Premium lobster tail, sweet and succulent. Perfect for special meals.', 'Food & Drinks', 22.00, 'USD', 'https://images.pexels.com/photos/7974351/pexels-photo-7974351.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop', 18.2400, -63.0300, 'Deep Sea Divers Co.', true, true),
    (seller_id, 'Dragon Fruit Box', 'Vibrant pink dragon fruits, delicious and packed with vitamins.', 'Food & Drinks', 14.99, 'USD', 'https://images.pexels.com/photos/5632530/pexels-photo-5632530.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop', 18.2100, -63.0600, 'Island Harvest', true, false),
    (seller_id, 'Rum Selection Pack', 'Three premium local rum varieties from the Caribbean islands.', 'Food & Drinks', 35.00, 'USD', 'https://images.pexels.com/photos/3407881/pexels-photo-3407881.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop', 18.2200, -63.0500, 'Rum Artisans Ltd.', true, false),
    (seller_id, 'Fresh Catch Bundle', 'Assorted fresh fish, sea bass, snapper and grouper - caught today.', 'Food & Drinks', 28.50, 'USD', 'https://images.pexels.com/photos/8169369/pexels-photo-8169369.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop', 18.2350, -63.0350, 'Fisherman''s Market', true, true),
    (seller_id, 'Rope & Line Kit', 'Professional marine rope and fishing line. Weather-resistant and durable.', 'Sailor Supplies', 45.00, 'USD', 'https://images.pexels.com/photos/3775857/pexels-photo-3775857.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop', 18.2410, -63.0290, 'Nautical Gear Hub', true, true),
    (seller_id, 'Marine Paint Set', 'UV-resistant marine paint for boat maintenance and repairs.', 'Sailor Supplies', 32.00, 'USD', 'https://images.pexels.com/photos/1199122/pexels-photo-1199122.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop', 18.2150, -63.0580, 'Sailors Supply Store', true, false),
    (seller_id, 'Compass Navigation Tool', 'Waterproof compass with luminous dial. Essential for navigation.', 'Sailor Supplies', 18.50, 'USD', 'https://images.pexels.com/photos/261128/pexels-photo-261128.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop', 18.2420, -63.0280, 'Navigation Masters', true, true),
    (seller_id, 'Fishing Tackle Set', 'Complete fishing tackle set with hooks, lures, and storage box.', 'Sailor Supplies', 38.00, 'USD', 'https://images.pexels.com/photos/4552622/pexels-photo-4552622.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop', 18.2400, -63.0320, 'Fisherman''s Paradise', true, true),
    (seller_id, 'Woven Palm Hat', 'Traditional woven palm hat, perfect for sun protection and style.', 'Handmade & Crafts', 16.00, 'USD', 'https://images.pexels.com/photos/3622613/pexels-photo-3622613.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop', 18.2180, -63.0520, 'Artisan Collective', true, false),
    (seller_id, 'Hand-carved Wood Figurine', 'Beautiful hand-carved wooden figurine depicting local wildlife.', 'Handmade & Crafts', 28.00, 'USD', 'https://images.pexels.com/photos/4555356/pexels-photo-4555356.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop', 18.2200, -63.0510, 'Master Carvers Guild', true, false),
    (seller_id, 'Beaded Necklace Collection', 'Handmade beaded necklaces with colorful patterns inspired by Caribbean culture.', 'Handmade & Crafts', 20.00, 'USD', 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop', 18.2210, -63.0505, 'Island Jewels', true, false),
    (seller_id, 'Woven Wall Tapestry', 'Large woven tapestry with traditional island patterns. A statement piece.', 'Handmade & Crafts', 45.00, 'USD', 'https://images.pexels.com/photos/5730175/pexels-photo-5730175.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop', 18.2190, -63.0530, 'Caribbean Textiles', true, false),
    (seller_id, 'Local Spice Blend', 'Homemade spice blend with tropical flavors - great for Caribbean dishes.', 'Food & Drinks', 9.50, 'USD', 'https://images.pexels.com/photos/6765369/pexels-photo-6765369.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop', 18.2220, -63.0490, 'Island Kitchen', true, false),
    (seller_id, 'Anchor Maintenance Kit', 'Complete kit for anchor maintenance and rope care.', 'Sailor Supplies', 52.00, 'USD', 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop', 18.2430, -63.0270, 'Harbor Master Supply', true, true)
  ON CONFLICT DO NOTHING;
END $$;