import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { ObjectType, Field, Int } from "type-graphql";

/**
 * Users table
 */
@ObjectType()
@Entity("users")
export class User extends BaseEntity {
	@Field(() => Int)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column({ unique: true })
	email: string;

	@Column()
	password: string;

	@Field()
	@Column()
	firstName: string;

	@Field()
	@Column()
	lastName: string;

	@Field()
	@Column()
	dateOfBirth: string;

	@Field()
	@Column()
	streetAddress: string;

	@Field()
	@Column()
	postCode: string;

	@Field()
	@Column()
	city: string;

	@Field()
	@Column()
	country: string;

	@Column("int", { default: 0 })
	tokenVersion: number;
}
