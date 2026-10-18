drop table if exists items_used;
drop table if exists breeding_logs;

create table breeding_logs(
  id bigint generated always as identity primary key,

  user_id uuid not null references auth.users(id) on delete cascade,

  slot_number int not null check (slot_number between 1 and 9),

  species varchar(50) not null,
  parent_1 varchar(50),
  parent_2 varchar(50),


  nature varchar(20),
  p1_nature varchar(20),
  p2_nature varchar(20),

  p1_hp int default 0, p1_atk int default 0, p1_def int default 0,
  p1_spa int default 0, p1_spd int default 0,p1_spe int default 0,
  p2_hp int default 0, p2_atk int default 0, p2_def int default 0,
  p2_spa int default 0,  p2_spd int default 0,p2_spe int default 0,

  hp_iv int default 0,  atk_iv int default 0, def_iv int default 0,
   spa_iv int default 0, spd_iv int default 0, spe_iv int default 0,


   parent_cost int not null default 0,
   intent varchar(10) check (intent in ('sell', 'keep')),
  status varchar(20) not null default 'active'
    check (status in ('active', 'hatched', 'sold')),
   hatched_at timestamp,
   sold_at timestamp,
   sell_price bigint,
   created_at timestamp default now()
   
);

create table items_used (
  id bigint generated always as identity primary key,
  breeding_log_id bigint not null references breeding_logs(id) on delete cascade,
  item_name varchar(50) not null,
  cost bigint default 0
);