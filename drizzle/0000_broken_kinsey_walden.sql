CREATE TABLE `exercises` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text NOT NULL,
	`group` text NOT NULL,
	`equipment` text NOT NULL,
	`userCreated` integer NOT NULL
);
