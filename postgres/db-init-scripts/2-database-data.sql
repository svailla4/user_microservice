--
-- PostgreSQL database dump
--

-- Dumped from database version 11.2 (Debian 11.2-1.pgdg90+1)
-- Dumped by pg_dump version 11.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: knex_migrations; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.knex_migrations (id, name, batch, migration_time) FROM stdin;
1	20180902090517_dev.js	1	2019-03-04 12:03:47.23+00
\.


--
-- Data for Name: knex_migrations_lock; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.knex_migrations_lock (index, is_locked) FROM stdin;
1	0
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.users (id, password, email) FROM stdin;
1	$2b$10$4H0O5W5FzkEHCqpCnRBOXuaGW6.VQScJysbghydUMvjhCA2o3nWDW	john@gmail.com
2	$2b$10$4p4OwTUB7NDOHR7eouZkGO1z1edeo5Gh/SywqhQdEEar3WXn.Z412	melissa@gmail.com
3	$2b$10$JKByow2XzkJX/5K.dWRxye535fscDMwq76S4wyaaK82xyL3jXZUi6	beth@gmail.com
4	$2b$10$jAWiL/R24dSuQucZFRdo5./ityynvRUMZicZAJiHwM6txhSUFKW4O	michael@dasd.com
\.


--
-- Name: knex_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.knex_migrations_id_seq', 1, true);


--
-- Name: knex_migrations_lock_index_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.knex_migrations_lock_index_seq', 1, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.users_id_seq', 1, false);


--
-- PostgreSQL database dump complete
--

