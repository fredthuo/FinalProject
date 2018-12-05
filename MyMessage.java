package entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity (name="messages")
public class MyMessage {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int mId;
	@Column
	private String body;
	@Column
	private String smsFrom;
	@Column
	private String smsTo;
	
	public MyMessage() {
		
		// TODO Auto-generated constructor stub
	}

	public int getmId() {
		return mId;
	}

	public void setmId(int mId) {
		this.mId = mId;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	public String getSmsFrom() {
		return smsFrom;
	}

	public void setSmsFrom(String smsFrom) {
		this.smsFrom = smsFrom;
	}

	public String getSmsTo() {
		return smsTo;
	}

	public void setSmsTo(String smsTo) {
		this.smsTo = smsTo;
	}
	
	
}
