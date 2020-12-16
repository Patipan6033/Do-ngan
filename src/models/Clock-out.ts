import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'


@Entity({ name: 'clock-out' })
export class Clockout {
	@PrimaryGeneratedColumn({ name: 'userId' })
	public userId: number

	@Column({ name: 'lineId', type: 'varchar' })
	public lineId:string


	@Column({ name: 'Today', type: 'text' })
	public Today: string

	@Column({ name: 'Tomorrow', type: 'text' })
	public Tomorrow: string

	@Column({ name: 'Issue', type: 'text' })
	public Issue: string

	@Column({ name: 'Projects', type: 'varchar' })
	public Projects: string

	@Column({ name: 'Tasks', type: 'varchar' })
	public Tasks: string

	@Column({ name: 'Time', type: 'varchar' })
	public Time: string


	@Column({ name: 'Date', type: 'varchar' })
	public Date: string

	// @Index()
	// @ManyToOne((_type) => Company, (companyId) => companyId.user, {
	// 	nullable: true,
	// })
	// @JoinColumn({ name: 'companyId' })
	// public companyId: Company
}