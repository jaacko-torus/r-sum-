import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "contact_category" */
export type Contact_Category = {
  __typename?: 'contact_category';
  /** An array relationship */
  contacts: Array<Contacts>;
  /** An aggregate relationship */
  contacts_aggregate: Contacts_Aggregate;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};


/** columns and relationships of "contact_category" */
export type Contact_CategoryContactsArgs = {
  distinct_on?: InputMaybe<Array<Contacts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contacts_Order_By>>;
  where?: InputMaybe<Contacts_Bool_Exp>;
};


/** columns and relationships of "contact_category" */
export type Contact_CategoryContacts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contacts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contacts_Order_By>>;
  where?: InputMaybe<Contacts_Bool_Exp>;
};

/** aggregated selection of "contact_category" */
export type Contact_Category_Aggregate = {
  __typename?: 'contact_category_aggregate';
  aggregate?: Maybe<Contact_Category_Aggregate_Fields>;
  nodes: Array<Contact_Category>;
};

/** aggregate fields of "contact_category" */
export type Contact_Category_Aggregate_Fields = {
  __typename?: 'contact_category_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Contact_Category_Max_Fields>;
  min?: Maybe<Contact_Category_Min_Fields>;
};


/** aggregate fields of "contact_category" */
export type Contact_Category_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Contact_Category_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "contact_category". All fields are combined with a logical 'AND'. */
export type Contact_Category_Bool_Exp = {
  _and?: InputMaybe<Array<Contact_Category_Bool_Exp>>;
  _not?: InputMaybe<Contact_Category_Bool_Exp>;
  _or?: InputMaybe<Array<Contact_Category_Bool_Exp>>;
  contacts?: InputMaybe<Contacts_Bool_Exp>;
  contacts_aggregate?: InputMaybe<Contacts_Aggregate_Bool_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "contact_category" */
export enum Contact_Category_Constraint {
  /** unique or primary key constraint on columns "id" */
  ContactCategoryPkey = 'contact_category_pkey'
}

export enum Contact_Category_Enum {
  Account = 'ACCOUNT',
  Basic = 'BASIC'
}

/** Boolean expression to compare columns of type "contact_category_enum". All fields are combined with logical 'AND'. */
export type Contact_Category_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Contact_Category_Enum>;
  _in?: InputMaybe<Array<Contact_Category_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Contact_Category_Enum>;
  _nin?: InputMaybe<Array<Contact_Category_Enum>>;
};

/** input type for inserting data into table "contact_category" */
export type Contact_Category_Insert_Input = {
  contacts?: InputMaybe<Contacts_Arr_Rel_Insert_Input>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Contact_Category_Max_Fields = {
  __typename?: 'contact_category_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Contact_Category_Min_Fields = {
  __typename?: 'contact_category_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "contact_category" */
export type Contact_Category_Mutation_Response = {
  __typename?: 'contact_category_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Contact_Category>;
};

/** input type for inserting object relation for remote table "contact_category" */
export type Contact_Category_Obj_Rel_Insert_Input = {
  data: Contact_Category_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Contact_Category_On_Conflict>;
};

/** on_conflict condition type for table "contact_category" */
export type Contact_Category_On_Conflict = {
  constraint: Contact_Category_Constraint;
  update_columns?: Array<Contact_Category_Update_Column>;
  where?: InputMaybe<Contact_Category_Bool_Exp>;
};

/** Ordering options when selecting data from "contact_category". */
export type Contact_Category_Order_By = {
  contacts_aggregate?: InputMaybe<Contacts_Aggregate_Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: contact_category */
export type Contact_Category_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "contact_category" */
export enum Contact_Category_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "contact_category" */
export type Contact_Category_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "contact_category" */
export type Contact_Category_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Contact_Category_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Contact_Category_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "contact_category" */
export enum Contact_Category_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id'
}

export type Contact_Category_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Contact_Category_Set_Input>;
  /** filter the rows which have to be updated */
  where: Contact_Category_Bool_Exp;
};

/** columns and relationships of "contacts" */
export type Contacts = {
  __typename?: 'contacts';
  category: Contact_Category_Enum;
  /** An object relationship */
  contact_category: Contact_Category;
  data: Scalars['String'];
  href?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  visible: Scalars['Boolean'];
};

/** aggregated selection of "contacts" */
export type Contacts_Aggregate = {
  __typename?: 'contacts_aggregate';
  aggregate?: Maybe<Contacts_Aggregate_Fields>;
  nodes: Array<Contacts>;
};

export type Contacts_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Contacts_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Contacts_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Contacts_Aggregate_Bool_Exp_Count>;
};

export type Contacts_Aggregate_Bool_Exp_Bool_And = {
  arguments: Contacts_Select_Column_Contacts_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Contacts_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Contacts_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Contacts_Select_Column_Contacts_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Contacts_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Contacts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Contacts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Contacts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "contacts" */
export type Contacts_Aggregate_Fields = {
  __typename?: 'contacts_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Contacts_Max_Fields>;
  min?: Maybe<Contacts_Min_Fields>;
};


/** aggregate fields of "contacts" */
export type Contacts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Contacts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "contacts" */
export type Contacts_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Contacts_Max_Order_By>;
  min?: InputMaybe<Contacts_Min_Order_By>;
};

/** input type for inserting array relation for remote table "contacts" */
export type Contacts_Arr_Rel_Insert_Input = {
  data: Array<Contacts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Contacts_On_Conflict>;
};

/** Boolean expression to filter rows from the table "contacts". All fields are combined with a logical 'AND'. */
export type Contacts_Bool_Exp = {
  _and?: InputMaybe<Array<Contacts_Bool_Exp>>;
  _not?: InputMaybe<Contacts_Bool_Exp>;
  _or?: InputMaybe<Array<Contacts_Bool_Exp>>;
  category?: InputMaybe<Contact_Category_Enum_Comparison_Exp>;
  contact_category?: InputMaybe<Contact_Category_Bool_Exp>;
  data?: InputMaybe<String_Comparison_Exp>;
  href?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  visible?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "contacts" */
export enum Contacts_Constraint {
  /** unique or primary key constraint on columns "name" */
  ContactsNameKey = 'contacts_name_key',
  /** unique or primary key constraint on columns "id" */
  ContactsPkey = 'contacts_pkey'
}

/** input type for inserting data into table "contacts" */
export type Contacts_Insert_Input = {
  category?: InputMaybe<Contact_Category_Enum>;
  contact_category?: InputMaybe<Contact_Category_Obj_Rel_Insert_Input>;
  data?: InputMaybe<Scalars['String']>;
  href?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  visible?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Contacts_Max_Fields = {
  __typename?: 'contacts_max_fields';
  data?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "contacts" */
export type Contacts_Max_Order_By = {
  data?: InputMaybe<Order_By>;
  href?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Contacts_Min_Fields = {
  __typename?: 'contacts_min_fields';
  data?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "contacts" */
export type Contacts_Min_Order_By = {
  data?: InputMaybe<Order_By>;
  href?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "contacts" */
export type Contacts_Mutation_Response = {
  __typename?: 'contacts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Contacts>;
};

/** on_conflict condition type for table "contacts" */
export type Contacts_On_Conflict = {
  constraint: Contacts_Constraint;
  update_columns?: Array<Contacts_Update_Column>;
  where?: InputMaybe<Contacts_Bool_Exp>;
};

/** Ordering options when selecting data from "contacts". */
export type Contacts_Order_By = {
  category?: InputMaybe<Order_By>;
  contact_category?: InputMaybe<Contact_Category_Order_By>;
  data?: InputMaybe<Order_By>;
  href?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  visible?: InputMaybe<Order_By>;
};

/** primary key columns input for table: contacts */
export type Contacts_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "contacts" */
export enum Contacts_Select_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Data = 'data',
  /** column name */
  Href = 'href',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Visible = 'visible'
}

/** select "contacts_aggregate_bool_exp_bool_and_arguments_columns" columns of table "contacts" */
export enum Contacts_Select_Column_Contacts_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Visible = 'visible'
}

/** select "contacts_aggregate_bool_exp_bool_or_arguments_columns" columns of table "contacts" */
export enum Contacts_Select_Column_Contacts_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Visible = 'visible'
}

/** input type for updating data in table "contacts" */
export type Contacts_Set_Input = {
  category?: InputMaybe<Contact_Category_Enum>;
  data?: InputMaybe<Scalars['String']>;
  href?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  visible?: InputMaybe<Scalars['Boolean']>;
};

/** Streaming cursor of the table "contacts" */
export type Contacts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Contacts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Contacts_Stream_Cursor_Value_Input = {
  category?: InputMaybe<Contact_Category_Enum>;
  data?: InputMaybe<Scalars['String']>;
  href?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  visible?: InputMaybe<Scalars['Boolean']>;
};

/** update columns of table "contacts" */
export enum Contacts_Update_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Data = 'data',
  /** column name */
  Href = 'href',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Visible = 'visible'
}

export type Contacts_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Contacts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Contacts_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** columns and relationships of "experience_category" */
export type Experience_Category = {
  __typename?: 'experience_category';
  description?: Maybe<Scalars['String']>;
  /** An array relationship */
  experiences: Array<Experiences>;
  /** An aggregate relationship */
  experiences_aggregate: Experiences_Aggregate;
  id: Scalars['String'];
};


/** columns and relationships of "experience_category" */
export type Experience_CategoryExperiencesArgs = {
  distinct_on?: InputMaybe<Array<Experiences_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Experiences_Order_By>>;
  where?: InputMaybe<Experiences_Bool_Exp>;
};


/** columns and relationships of "experience_category" */
export type Experience_CategoryExperiences_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Experiences_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Experiences_Order_By>>;
  where?: InputMaybe<Experiences_Bool_Exp>;
};

/** aggregated selection of "experience_category" */
export type Experience_Category_Aggregate = {
  __typename?: 'experience_category_aggregate';
  aggregate?: Maybe<Experience_Category_Aggregate_Fields>;
  nodes: Array<Experience_Category>;
};

/** aggregate fields of "experience_category" */
export type Experience_Category_Aggregate_Fields = {
  __typename?: 'experience_category_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Experience_Category_Max_Fields>;
  min?: Maybe<Experience_Category_Min_Fields>;
};


/** aggregate fields of "experience_category" */
export type Experience_Category_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Experience_Category_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "experience_category". All fields are combined with a logical 'AND'. */
export type Experience_Category_Bool_Exp = {
  _and?: InputMaybe<Array<Experience_Category_Bool_Exp>>;
  _not?: InputMaybe<Experience_Category_Bool_Exp>;
  _or?: InputMaybe<Array<Experience_Category_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  experiences?: InputMaybe<Experiences_Bool_Exp>;
  experiences_aggregate?: InputMaybe<Experiences_Aggregate_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "experience_category" */
export enum Experience_Category_Constraint {
  /** unique or primary key constraint on columns "id" */
  ExperienceCategoryPkey = 'experience_category_pkey'
}

export enum Experience_Category_Enum {
  Education = 'EDUCATION',
  Internship = 'INTERNSHIP',
  Job = 'JOB',
  Project = 'PROJECT',
  Volunteer = 'VOLUNTEER'
}

/** Boolean expression to compare columns of type "experience_category_enum". All fields are combined with logical 'AND'. */
export type Experience_Category_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Experience_Category_Enum>;
  _in?: InputMaybe<Array<Experience_Category_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Experience_Category_Enum>;
  _nin?: InputMaybe<Array<Experience_Category_Enum>>;
};

/** input type for inserting data into table "experience_category" */
export type Experience_Category_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  experiences?: InputMaybe<Experiences_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Experience_Category_Max_Fields = {
  __typename?: 'experience_category_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Experience_Category_Min_Fields = {
  __typename?: 'experience_category_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "experience_category" */
export type Experience_Category_Mutation_Response = {
  __typename?: 'experience_category_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Experience_Category>;
};

/** input type for inserting object relation for remote table "experience_category" */
export type Experience_Category_Obj_Rel_Insert_Input = {
  data: Experience_Category_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Experience_Category_On_Conflict>;
};

/** on_conflict condition type for table "experience_category" */
export type Experience_Category_On_Conflict = {
  constraint: Experience_Category_Constraint;
  update_columns?: Array<Experience_Category_Update_Column>;
  where?: InputMaybe<Experience_Category_Bool_Exp>;
};

/** Ordering options when selecting data from "experience_category". */
export type Experience_Category_Order_By = {
  description?: InputMaybe<Order_By>;
  experiences_aggregate?: InputMaybe<Experiences_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: experience_category */
export type Experience_Category_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "experience_category" */
export enum Experience_Category_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "experience_category" */
export type Experience_Category_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "experience_category" */
export type Experience_Category_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Experience_Category_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Experience_Category_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "experience_category" */
export enum Experience_Category_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id'
}

export type Experience_Category_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Experience_Category_Set_Input>;
  /** filter the rows which have to be updated */
  where: Experience_Category_Bool_Exp;
};

/** columns and relationships of "experience_skills" */
export type Experience_Skills = {
  __typename?: 'experience_skills';
  /** An object relationship */
  experience: Experiences;
  experience_id: Scalars['uuid'];
  id: Scalars['uuid'];
  /** An object relationship */
  skill: Skills;
  skill_id: Scalars['uuid'];
};

/** aggregated selection of "experience_skills" */
export type Experience_Skills_Aggregate = {
  __typename?: 'experience_skills_aggregate';
  aggregate?: Maybe<Experience_Skills_Aggregate_Fields>;
  nodes: Array<Experience_Skills>;
};

export type Experience_Skills_Aggregate_Bool_Exp = {
  count?: InputMaybe<Experience_Skills_Aggregate_Bool_Exp_Count>;
};

export type Experience_Skills_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Experience_Skills_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Experience_Skills_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "experience_skills" */
export type Experience_Skills_Aggregate_Fields = {
  __typename?: 'experience_skills_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Experience_Skills_Max_Fields>;
  min?: Maybe<Experience_Skills_Min_Fields>;
};


/** aggregate fields of "experience_skills" */
export type Experience_Skills_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Experience_Skills_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "experience_skills" */
export type Experience_Skills_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Experience_Skills_Max_Order_By>;
  min?: InputMaybe<Experience_Skills_Min_Order_By>;
};

/** input type for inserting array relation for remote table "experience_skills" */
export type Experience_Skills_Arr_Rel_Insert_Input = {
  data: Array<Experience_Skills_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Experience_Skills_On_Conflict>;
};

/** Boolean expression to filter rows from the table "experience_skills". All fields are combined with a logical 'AND'. */
export type Experience_Skills_Bool_Exp = {
  _and?: InputMaybe<Array<Experience_Skills_Bool_Exp>>;
  _not?: InputMaybe<Experience_Skills_Bool_Exp>;
  _or?: InputMaybe<Array<Experience_Skills_Bool_Exp>>;
  experience?: InputMaybe<Experiences_Bool_Exp>;
  experience_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  skill?: InputMaybe<Skills_Bool_Exp>;
  skill_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "experience_skills" */
export enum Experience_Skills_Constraint {
  /** unique or primary key constraint on columns "skill_id", "experience_id" */
  ExperienceSkillsExperienceIdSkillIdKey = 'experience_skills_experience_id_skill_id_key',
  /** unique or primary key constraint on columns "id" */
  ExperienceSkillsPkey = 'experience_skills_pkey'
}

/** input type for inserting data into table "experience_skills" */
export type Experience_Skills_Insert_Input = {
  experience?: InputMaybe<Experiences_Obj_Rel_Insert_Input>;
  experience_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  skill?: InputMaybe<Skills_Obj_Rel_Insert_Input>;
  skill_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Experience_Skills_Max_Fields = {
  __typename?: 'experience_skills_max_fields';
  experience_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  skill_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "experience_skills" */
export type Experience_Skills_Max_Order_By = {
  experience_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  skill_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Experience_Skills_Min_Fields = {
  __typename?: 'experience_skills_min_fields';
  experience_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  skill_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "experience_skills" */
export type Experience_Skills_Min_Order_By = {
  experience_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  skill_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "experience_skills" */
export type Experience_Skills_Mutation_Response = {
  __typename?: 'experience_skills_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Experience_Skills>;
};

/** on_conflict condition type for table "experience_skills" */
export type Experience_Skills_On_Conflict = {
  constraint: Experience_Skills_Constraint;
  update_columns?: Array<Experience_Skills_Update_Column>;
  where?: InputMaybe<Experience_Skills_Bool_Exp>;
};

/** Ordering options when selecting data from "experience_skills". */
export type Experience_Skills_Order_By = {
  experience?: InputMaybe<Experiences_Order_By>;
  experience_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  skill?: InputMaybe<Skills_Order_By>;
  skill_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: experience_skills */
export type Experience_Skills_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "experience_skills" */
export enum Experience_Skills_Select_Column {
  /** column name */
  ExperienceId = 'experience_id',
  /** column name */
  Id = 'id',
  /** column name */
  SkillId = 'skill_id'
}

/** input type for updating data in table "experience_skills" */
export type Experience_Skills_Set_Input = {
  experience_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  skill_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "experience_skills" */
export type Experience_Skills_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Experience_Skills_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Experience_Skills_Stream_Cursor_Value_Input = {
  experience_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  skill_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "experience_skills" */
export enum Experience_Skills_Update_Column {
  /** column name */
  ExperienceId = 'experience_id',
  /** column name */
  Id = 'id',
  /** column name */
  SkillId = 'skill_id'
}

export type Experience_Skills_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Experience_Skills_Set_Input>;
  /** filter the rows which have to be updated */
  where: Experience_Skills_Bool_Exp;
};

/** columns and relationships of "experiences" */
export type Experiences = {
  __typename?: 'experiences';
  category: Experience_Category_Enum;
  date_end?: Maybe<Scalars['date']>;
  date_start: Scalars['date'];
  description?: Maybe<Scalars['String']>;
  /** An object relationship */
  experience_category: Experience_Category;
  /** An array relationship */
  experience_skills: Array<Experience_Skills>;
  /** An aggregate relationship */
  experience_skills_aggregate: Experience_Skills_Aggregate;
  id: Scalars['uuid'];
  inscription?: Maybe<Scalars['String']>;
  /** An object relationship */
  inscriptionTypeByInscriptionType: Inscription_Type;
  inscription_href?: Maybe<Scalars['String']>;
  inscription_type: Inscription_Type_Enum;
  /** separated by the newline ("\n") character */
  items?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  name_href?: Maybe<Scalars['String']>;
  remote: Remote_Category_Enum;
  /** An object relationship */
  remote_category: Remote_Category;
  visible: Scalars['Boolean'];
};


/** columns and relationships of "experiences" */
export type ExperiencesExperience_SkillsArgs = {
  distinct_on?: InputMaybe<Array<Experience_Skills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Experience_Skills_Order_By>>;
  where?: InputMaybe<Experience_Skills_Bool_Exp>;
};


/** columns and relationships of "experiences" */
export type ExperiencesExperience_Skills_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Experience_Skills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Experience_Skills_Order_By>>;
  where?: InputMaybe<Experience_Skills_Bool_Exp>;
};

/** aggregated selection of "experiences" */
export type Experiences_Aggregate = {
  __typename?: 'experiences_aggregate';
  aggregate?: Maybe<Experiences_Aggregate_Fields>;
  nodes: Array<Experiences>;
};

export type Experiences_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Experiences_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Experiences_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Experiences_Aggregate_Bool_Exp_Count>;
};

export type Experiences_Aggregate_Bool_Exp_Bool_And = {
  arguments: Experiences_Select_Column_Experiences_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Experiences_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Experiences_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Experiences_Select_Column_Experiences_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Experiences_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Experiences_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Experiences_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Experiences_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "experiences" */
export type Experiences_Aggregate_Fields = {
  __typename?: 'experiences_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Experiences_Max_Fields>;
  min?: Maybe<Experiences_Min_Fields>;
};


/** aggregate fields of "experiences" */
export type Experiences_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Experiences_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "experiences" */
export type Experiences_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Experiences_Max_Order_By>;
  min?: InputMaybe<Experiences_Min_Order_By>;
};

/** input type for inserting array relation for remote table "experiences" */
export type Experiences_Arr_Rel_Insert_Input = {
  data: Array<Experiences_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Experiences_On_Conflict>;
};

/** Boolean expression to filter rows from the table "experiences". All fields are combined with a logical 'AND'. */
export type Experiences_Bool_Exp = {
  _and?: InputMaybe<Array<Experiences_Bool_Exp>>;
  _not?: InputMaybe<Experiences_Bool_Exp>;
  _or?: InputMaybe<Array<Experiences_Bool_Exp>>;
  category?: InputMaybe<Experience_Category_Enum_Comparison_Exp>;
  date_end?: InputMaybe<Date_Comparison_Exp>;
  date_start?: InputMaybe<Date_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  experience_category?: InputMaybe<Experience_Category_Bool_Exp>;
  experience_skills?: InputMaybe<Experience_Skills_Bool_Exp>;
  experience_skills_aggregate?: InputMaybe<Experience_Skills_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  inscription?: InputMaybe<String_Comparison_Exp>;
  inscriptionTypeByInscriptionType?: InputMaybe<Inscription_Type_Bool_Exp>;
  inscription_href?: InputMaybe<String_Comparison_Exp>;
  inscription_type?: InputMaybe<Inscription_Type_Enum_Comparison_Exp>;
  items?: InputMaybe<String_Comparison_Exp>;
  location?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  name_href?: InputMaybe<String_Comparison_Exp>;
  remote?: InputMaybe<Remote_Category_Enum_Comparison_Exp>;
  remote_category?: InputMaybe<Remote_Category_Bool_Exp>;
  visible?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "experiences" */
export enum Experiences_Constraint {
  /** unique or primary key constraint on columns "id" */
  ExperiencesPkey = 'experiences_pkey'
}

/** input type for inserting data into table "experiences" */
export type Experiences_Insert_Input = {
  category?: InputMaybe<Experience_Category_Enum>;
  date_end?: InputMaybe<Scalars['date']>;
  date_start?: InputMaybe<Scalars['date']>;
  description?: InputMaybe<Scalars['String']>;
  experience_category?: InputMaybe<Experience_Category_Obj_Rel_Insert_Input>;
  experience_skills?: InputMaybe<Experience_Skills_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  inscription?: InputMaybe<Scalars['String']>;
  inscriptionTypeByInscriptionType?: InputMaybe<Inscription_Type_Obj_Rel_Insert_Input>;
  inscription_href?: InputMaybe<Scalars['String']>;
  inscription_type?: InputMaybe<Inscription_Type_Enum>;
  /** separated by the newline ("\n") character */
  items?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_href?: InputMaybe<Scalars['String']>;
  remote?: InputMaybe<Remote_Category_Enum>;
  remote_category?: InputMaybe<Remote_Category_Obj_Rel_Insert_Input>;
  visible?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Experiences_Max_Fields = {
  __typename?: 'experiences_max_fields';
  date_end?: Maybe<Scalars['date']>;
  date_start?: Maybe<Scalars['date']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  inscription?: Maybe<Scalars['String']>;
  inscription_href?: Maybe<Scalars['String']>;
  /** separated by the newline ("\n") character */
  items?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  name_href?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "experiences" */
export type Experiences_Max_Order_By = {
  date_end?: InputMaybe<Order_By>;
  date_start?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inscription?: InputMaybe<Order_By>;
  inscription_href?: InputMaybe<Order_By>;
  /** separated by the newline ("\n") character */
  items?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  name_href?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Experiences_Min_Fields = {
  __typename?: 'experiences_min_fields';
  date_end?: Maybe<Scalars['date']>;
  date_start?: Maybe<Scalars['date']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  inscription?: Maybe<Scalars['String']>;
  inscription_href?: Maybe<Scalars['String']>;
  /** separated by the newline ("\n") character */
  items?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  name_href?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "experiences" */
export type Experiences_Min_Order_By = {
  date_end?: InputMaybe<Order_By>;
  date_start?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inscription?: InputMaybe<Order_By>;
  inscription_href?: InputMaybe<Order_By>;
  /** separated by the newline ("\n") character */
  items?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  name_href?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "experiences" */
export type Experiences_Mutation_Response = {
  __typename?: 'experiences_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Experiences>;
};

/** input type for inserting object relation for remote table "experiences" */
export type Experiences_Obj_Rel_Insert_Input = {
  data: Experiences_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Experiences_On_Conflict>;
};

/** on_conflict condition type for table "experiences" */
export type Experiences_On_Conflict = {
  constraint: Experiences_Constraint;
  update_columns?: Array<Experiences_Update_Column>;
  where?: InputMaybe<Experiences_Bool_Exp>;
};

/** Ordering options when selecting data from "experiences". */
export type Experiences_Order_By = {
  category?: InputMaybe<Order_By>;
  date_end?: InputMaybe<Order_By>;
  date_start?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  experience_category?: InputMaybe<Experience_Category_Order_By>;
  experience_skills_aggregate?: InputMaybe<Experience_Skills_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  inscription?: InputMaybe<Order_By>;
  inscriptionTypeByInscriptionType?: InputMaybe<Inscription_Type_Order_By>;
  inscription_href?: InputMaybe<Order_By>;
  inscription_type?: InputMaybe<Order_By>;
  items?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  name_href?: InputMaybe<Order_By>;
  remote?: InputMaybe<Order_By>;
  remote_category?: InputMaybe<Remote_Category_Order_By>;
  visible?: InputMaybe<Order_By>;
};

/** primary key columns input for table: experiences */
export type Experiences_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "experiences" */
export enum Experiences_Select_Column {
  /** column name */
  Category = 'category',
  /** column name */
  DateEnd = 'date_end',
  /** column name */
  DateStart = 'date_start',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Inscription = 'inscription',
  /** column name */
  InscriptionHref = 'inscription_href',
  /** column name */
  InscriptionType = 'inscription_type',
  /** column name */
  Items = 'items',
  /** column name */
  Location = 'location',
  /** column name */
  Name = 'name',
  /** column name */
  NameHref = 'name_href',
  /** column name */
  Remote = 'remote',
  /** column name */
  Visible = 'visible'
}

/** select "experiences_aggregate_bool_exp_bool_and_arguments_columns" columns of table "experiences" */
export enum Experiences_Select_Column_Experiences_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Visible = 'visible'
}

/** select "experiences_aggregate_bool_exp_bool_or_arguments_columns" columns of table "experiences" */
export enum Experiences_Select_Column_Experiences_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Visible = 'visible'
}

/** input type for updating data in table "experiences" */
export type Experiences_Set_Input = {
  category?: InputMaybe<Experience_Category_Enum>;
  date_end?: InputMaybe<Scalars['date']>;
  date_start?: InputMaybe<Scalars['date']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  inscription?: InputMaybe<Scalars['String']>;
  inscription_href?: InputMaybe<Scalars['String']>;
  inscription_type?: InputMaybe<Inscription_Type_Enum>;
  /** separated by the newline ("\n") character */
  items?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_href?: InputMaybe<Scalars['String']>;
  remote?: InputMaybe<Remote_Category_Enum>;
  visible?: InputMaybe<Scalars['Boolean']>;
};

/** Streaming cursor of the table "experiences" */
export type Experiences_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Experiences_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Experiences_Stream_Cursor_Value_Input = {
  category?: InputMaybe<Experience_Category_Enum>;
  date_end?: InputMaybe<Scalars['date']>;
  date_start?: InputMaybe<Scalars['date']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  inscription?: InputMaybe<Scalars['String']>;
  inscription_href?: InputMaybe<Scalars['String']>;
  inscription_type?: InputMaybe<Inscription_Type_Enum>;
  /** separated by the newline ("\n") character */
  items?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_href?: InputMaybe<Scalars['String']>;
  remote?: InputMaybe<Remote_Category_Enum>;
  visible?: InputMaybe<Scalars['Boolean']>;
};

/** update columns of table "experiences" */
export enum Experiences_Update_Column {
  /** column name */
  Category = 'category',
  /** column name */
  DateEnd = 'date_end',
  /** column name */
  DateStart = 'date_start',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Inscription = 'inscription',
  /** column name */
  InscriptionHref = 'inscription_href',
  /** column name */
  InscriptionType = 'inscription_type',
  /** column name */
  Items = 'items',
  /** column name */
  Location = 'location',
  /** column name */
  Name = 'name',
  /** column name */
  NameHref = 'name_href',
  /** column name */
  Remote = 'remote',
  /** column name */
  Visible = 'visible'
}

export type Experiences_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Experiences_Set_Input>;
  /** filter the rows which have to be updated */
  where: Experiences_Bool_Exp;
};

/** columns and relationships of "inscription_type" */
export type Inscription_Type = {
  __typename?: 'inscription_type';
  description?: Maybe<Scalars['String']>;
  /** An array relationship */
  experiences: Array<Experiences>;
  /** An aggregate relationship */
  experiences_aggregate: Experiences_Aggregate;
  id: Scalars['String'];
  /** An array relationship */
  projects: Array<Projects>;
  /** An aggregate relationship */
  projects_aggregate: Projects_Aggregate;
};


/** columns and relationships of "inscription_type" */
export type Inscription_TypeExperiencesArgs = {
  distinct_on?: InputMaybe<Array<Experiences_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Experiences_Order_By>>;
  where?: InputMaybe<Experiences_Bool_Exp>;
};


/** columns and relationships of "inscription_type" */
export type Inscription_TypeExperiences_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Experiences_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Experiences_Order_By>>;
  where?: InputMaybe<Experiences_Bool_Exp>;
};


/** columns and relationships of "inscription_type" */
export type Inscription_TypeProjectsArgs = {
  distinct_on?: InputMaybe<Array<Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Projects_Order_By>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};


/** columns and relationships of "inscription_type" */
export type Inscription_TypeProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Projects_Order_By>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};

/** aggregated selection of "inscription_type" */
export type Inscription_Type_Aggregate = {
  __typename?: 'inscription_type_aggregate';
  aggregate?: Maybe<Inscription_Type_Aggregate_Fields>;
  nodes: Array<Inscription_Type>;
};

/** aggregate fields of "inscription_type" */
export type Inscription_Type_Aggregate_Fields = {
  __typename?: 'inscription_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Inscription_Type_Max_Fields>;
  min?: Maybe<Inscription_Type_Min_Fields>;
};


/** aggregate fields of "inscription_type" */
export type Inscription_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Inscription_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "inscription_type". All fields are combined with a logical 'AND'. */
export type Inscription_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Inscription_Type_Bool_Exp>>;
  _not?: InputMaybe<Inscription_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Inscription_Type_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  experiences?: InputMaybe<Experiences_Bool_Exp>;
  experiences_aggregate?: InputMaybe<Experiences_Aggregate_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  projects?: InputMaybe<Projects_Bool_Exp>;
  projects_aggregate?: InputMaybe<Projects_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "inscription_type" */
export enum Inscription_Type_Constraint {
  /** unique or primary key constraint on columns "id" */
  InscriptionTypePkey = 'inscription_type_pkey'
}

export enum Inscription_Type_Enum {
  Inline = 'INLINE',
  Under = 'UNDER'
}

/** Boolean expression to compare columns of type "inscription_type_enum". All fields are combined with logical 'AND'. */
export type Inscription_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Inscription_Type_Enum>;
  _in?: InputMaybe<Array<Inscription_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Inscription_Type_Enum>;
  _nin?: InputMaybe<Array<Inscription_Type_Enum>>;
};

/** input type for inserting data into table "inscription_type" */
export type Inscription_Type_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  experiences?: InputMaybe<Experiences_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']>;
  projects?: InputMaybe<Projects_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Inscription_Type_Max_Fields = {
  __typename?: 'inscription_type_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Inscription_Type_Min_Fields = {
  __typename?: 'inscription_type_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "inscription_type" */
export type Inscription_Type_Mutation_Response = {
  __typename?: 'inscription_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Inscription_Type>;
};

/** input type for inserting object relation for remote table "inscription_type" */
export type Inscription_Type_Obj_Rel_Insert_Input = {
  data: Inscription_Type_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Inscription_Type_On_Conflict>;
};

/** on_conflict condition type for table "inscription_type" */
export type Inscription_Type_On_Conflict = {
  constraint: Inscription_Type_Constraint;
  update_columns?: Array<Inscription_Type_Update_Column>;
  where?: InputMaybe<Inscription_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "inscription_type". */
export type Inscription_Type_Order_By = {
  description?: InputMaybe<Order_By>;
  experiences_aggregate?: InputMaybe<Experiences_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  projects_aggregate?: InputMaybe<Projects_Aggregate_Order_By>;
};

/** primary key columns input for table: inscription_type */
export type Inscription_Type_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "inscription_type" */
export enum Inscription_Type_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "inscription_type" */
export type Inscription_Type_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "inscription_type" */
export type Inscription_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Inscription_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Inscription_Type_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "inscription_type" */
export enum Inscription_Type_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id'
}

export type Inscription_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Inscription_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Inscription_Type_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "contact_category" */
  delete_contact_category?: Maybe<Contact_Category_Mutation_Response>;
  /** delete single row from the table: "contact_category" */
  delete_contact_category_by_pk?: Maybe<Contact_Category>;
  /** delete data from the table: "contacts" */
  delete_contacts?: Maybe<Contacts_Mutation_Response>;
  /** delete single row from the table: "contacts" */
  delete_contacts_by_pk?: Maybe<Contacts>;
  /** delete data from the table: "experience_category" */
  delete_experience_category?: Maybe<Experience_Category_Mutation_Response>;
  /** delete single row from the table: "experience_category" */
  delete_experience_category_by_pk?: Maybe<Experience_Category>;
  /** delete data from the table: "experience_skills" */
  delete_experience_skills?: Maybe<Experience_Skills_Mutation_Response>;
  /** delete single row from the table: "experience_skills" */
  delete_experience_skills_by_pk?: Maybe<Experience_Skills>;
  /** delete data from the table: "experiences" */
  delete_experiences?: Maybe<Experiences_Mutation_Response>;
  /** delete single row from the table: "experiences" */
  delete_experiences_by_pk?: Maybe<Experiences>;
  /** delete data from the table: "inscription_type" */
  delete_inscription_type?: Maybe<Inscription_Type_Mutation_Response>;
  /** delete single row from the table: "inscription_type" */
  delete_inscription_type_by_pk?: Maybe<Inscription_Type>;
  /** delete data from the table: "project_skills" */
  delete_project_skills?: Maybe<Project_Skills_Mutation_Response>;
  /** delete single row from the table: "project_skills" */
  delete_project_skills_by_pk?: Maybe<Project_Skills>;
  /** delete data from the table: "projects" */
  delete_projects?: Maybe<Projects_Mutation_Response>;
  /** delete single row from the table: "projects" */
  delete_projects_by_pk?: Maybe<Projects>;
  /** delete data from the table: "remote_category" */
  delete_remote_category?: Maybe<Remote_Category_Mutation_Response>;
  /** delete single row from the table: "remote_category" */
  delete_remote_category_by_pk?: Maybe<Remote_Category>;
  /** delete data from the table: "skill_category" */
  delete_skill_category?: Maybe<Skill_Category_Mutation_Response>;
  /** delete single row from the table: "skill_category" */
  delete_skill_category_by_pk?: Maybe<Skill_Category>;
  /** delete data from the table: "skills" */
  delete_skills?: Maybe<Skills_Mutation_Response>;
  /** delete single row from the table: "skills" */
  delete_skills_by_pk?: Maybe<Skills>;
  /** insert data into the table: "contact_category" */
  insert_contact_category?: Maybe<Contact_Category_Mutation_Response>;
  /** insert a single row into the table: "contact_category" */
  insert_contact_category_one?: Maybe<Contact_Category>;
  /** insert data into the table: "contacts" */
  insert_contacts?: Maybe<Contacts_Mutation_Response>;
  /** insert a single row into the table: "contacts" */
  insert_contacts_one?: Maybe<Contacts>;
  /** insert data into the table: "experience_category" */
  insert_experience_category?: Maybe<Experience_Category_Mutation_Response>;
  /** insert a single row into the table: "experience_category" */
  insert_experience_category_one?: Maybe<Experience_Category>;
  /** insert data into the table: "experience_skills" */
  insert_experience_skills?: Maybe<Experience_Skills_Mutation_Response>;
  /** insert a single row into the table: "experience_skills" */
  insert_experience_skills_one?: Maybe<Experience_Skills>;
  /** insert data into the table: "experiences" */
  insert_experiences?: Maybe<Experiences_Mutation_Response>;
  /** insert a single row into the table: "experiences" */
  insert_experiences_one?: Maybe<Experiences>;
  /** insert data into the table: "inscription_type" */
  insert_inscription_type?: Maybe<Inscription_Type_Mutation_Response>;
  /** insert a single row into the table: "inscription_type" */
  insert_inscription_type_one?: Maybe<Inscription_Type>;
  /** insert data into the table: "project_skills" */
  insert_project_skills?: Maybe<Project_Skills_Mutation_Response>;
  /** insert a single row into the table: "project_skills" */
  insert_project_skills_one?: Maybe<Project_Skills>;
  /** insert data into the table: "projects" */
  insert_projects?: Maybe<Projects_Mutation_Response>;
  /** insert a single row into the table: "projects" */
  insert_projects_one?: Maybe<Projects>;
  /** insert data into the table: "remote_category" */
  insert_remote_category?: Maybe<Remote_Category_Mutation_Response>;
  /** insert a single row into the table: "remote_category" */
  insert_remote_category_one?: Maybe<Remote_Category>;
  /** insert data into the table: "skill_category" */
  insert_skill_category?: Maybe<Skill_Category_Mutation_Response>;
  /** insert a single row into the table: "skill_category" */
  insert_skill_category_one?: Maybe<Skill_Category>;
  /** insert data into the table: "skills" */
  insert_skills?: Maybe<Skills_Mutation_Response>;
  /** insert a single row into the table: "skills" */
  insert_skills_one?: Maybe<Skills>;
  /** update data of the table: "contact_category" */
  update_contact_category?: Maybe<Contact_Category_Mutation_Response>;
  /** update single row of the table: "contact_category" */
  update_contact_category_by_pk?: Maybe<Contact_Category>;
  /** update multiples rows of table: "contact_category" */
  update_contact_category_many?: Maybe<Array<Maybe<Contact_Category_Mutation_Response>>>;
  /** update data of the table: "contacts" */
  update_contacts?: Maybe<Contacts_Mutation_Response>;
  /** update single row of the table: "contacts" */
  update_contacts_by_pk?: Maybe<Contacts>;
  /** update multiples rows of table: "contacts" */
  update_contacts_many?: Maybe<Array<Maybe<Contacts_Mutation_Response>>>;
  /** update data of the table: "experience_category" */
  update_experience_category?: Maybe<Experience_Category_Mutation_Response>;
  /** update single row of the table: "experience_category" */
  update_experience_category_by_pk?: Maybe<Experience_Category>;
  /** update multiples rows of table: "experience_category" */
  update_experience_category_many?: Maybe<Array<Maybe<Experience_Category_Mutation_Response>>>;
  /** update data of the table: "experience_skills" */
  update_experience_skills?: Maybe<Experience_Skills_Mutation_Response>;
  /** update single row of the table: "experience_skills" */
  update_experience_skills_by_pk?: Maybe<Experience_Skills>;
  /** update multiples rows of table: "experience_skills" */
  update_experience_skills_many?: Maybe<Array<Maybe<Experience_Skills_Mutation_Response>>>;
  /** update data of the table: "experiences" */
  update_experiences?: Maybe<Experiences_Mutation_Response>;
  /** update single row of the table: "experiences" */
  update_experiences_by_pk?: Maybe<Experiences>;
  /** update multiples rows of table: "experiences" */
  update_experiences_many?: Maybe<Array<Maybe<Experiences_Mutation_Response>>>;
  /** update data of the table: "inscription_type" */
  update_inscription_type?: Maybe<Inscription_Type_Mutation_Response>;
  /** update single row of the table: "inscription_type" */
  update_inscription_type_by_pk?: Maybe<Inscription_Type>;
  /** update multiples rows of table: "inscription_type" */
  update_inscription_type_many?: Maybe<Array<Maybe<Inscription_Type_Mutation_Response>>>;
  /** update data of the table: "project_skills" */
  update_project_skills?: Maybe<Project_Skills_Mutation_Response>;
  /** update single row of the table: "project_skills" */
  update_project_skills_by_pk?: Maybe<Project_Skills>;
  /** update multiples rows of table: "project_skills" */
  update_project_skills_many?: Maybe<Array<Maybe<Project_Skills_Mutation_Response>>>;
  /** update data of the table: "projects" */
  update_projects?: Maybe<Projects_Mutation_Response>;
  /** update single row of the table: "projects" */
  update_projects_by_pk?: Maybe<Projects>;
  /** update multiples rows of table: "projects" */
  update_projects_many?: Maybe<Array<Maybe<Projects_Mutation_Response>>>;
  /** update data of the table: "remote_category" */
  update_remote_category?: Maybe<Remote_Category_Mutation_Response>;
  /** update single row of the table: "remote_category" */
  update_remote_category_by_pk?: Maybe<Remote_Category>;
  /** update multiples rows of table: "remote_category" */
  update_remote_category_many?: Maybe<Array<Maybe<Remote_Category_Mutation_Response>>>;
  /** update data of the table: "skill_category" */
  update_skill_category?: Maybe<Skill_Category_Mutation_Response>;
  /** update single row of the table: "skill_category" */
  update_skill_category_by_pk?: Maybe<Skill_Category>;
  /** update multiples rows of table: "skill_category" */
  update_skill_category_many?: Maybe<Array<Maybe<Skill_Category_Mutation_Response>>>;
  /** update data of the table: "skills" */
  update_skills?: Maybe<Skills_Mutation_Response>;
  /** update single row of the table: "skills" */
  update_skills_by_pk?: Maybe<Skills>;
  /** update multiples rows of table: "skills" */
  update_skills_many?: Maybe<Array<Maybe<Skills_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Contact_CategoryArgs = {
  where: Contact_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Contact_Category_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_ContactsArgs = {
  where: Contacts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Contacts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Experience_CategoryArgs = {
  where: Experience_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Experience_Category_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Experience_SkillsArgs = {
  where: Experience_Skills_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Experience_Skills_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ExperiencesArgs = {
  where: Experiences_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Experiences_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Inscription_TypeArgs = {
  where: Inscription_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Inscription_Type_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Project_SkillsArgs = {
  where: Project_Skills_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Project_Skills_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ProjectsArgs = {
  where: Projects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Projects_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Remote_CategoryArgs = {
  where: Remote_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Remote_Category_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Skill_CategoryArgs = {
  where: Skill_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Skill_Category_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_SkillsArgs = {
  where: Skills_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Skills_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_Contact_CategoryArgs = {
  objects: Array<Contact_Category_Insert_Input>;
  on_conflict?: InputMaybe<Contact_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contact_Category_OneArgs = {
  object: Contact_Category_Insert_Input;
  on_conflict?: InputMaybe<Contact_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ContactsArgs = {
  objects: Array<Contacts_Insert_Input>;
  on_conflict?: InputMaybe<Contacts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contacts_OneArgs = {
  object: Contacts_Insert_Input;
  on_conflict?: InputMaybe<Contacts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Experience_CategoryArgs = {
  objects: Array<Experience_Category_Insert_Input>;
  on_conflict?: InputMaybe<Experience_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Experience_Category_OneArgs = {
  object: Experience_Category_Insert_Input;
  on_conflict?: InputMaybe<Experience_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Experience_SkillsArgs = {
  objects: Array<Experience_Skills_Insert_Input>;
  on_conflict?: InputMaybe<Experience_Skills_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Experience_Skills_OneArgs = {
  object: Experience_Skills_Insert_Input;
  on_conflict?: InputMaybe<Experience_Skills_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ExperiencesArgs = {
  objects: Array<Experiences_Insert_Input>;
  on_conflict?: InputMaybe<Experiences_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Experiences_OneArgs = {
  object: Experiences_Insert_Input;
  on_conflict?: InputMaybe<Experiences_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Inscription_TypeArgs = {
  objects: Array<Inscription_Type_Insert_Input>;
  on_conflict?: InputMaybe<Inscription_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Inscription_Type_OneArgs = {
  object: Inscription_Type_Insert_Input;
  on_conflict?: InputMaybe<Inscription_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Project_SkillsArgs = {
  objects: Array<Project_Skills_Insert_Input>;
  on_conflict?: InputMaybe<Project_Skills_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Project_Skills_OneArgs = {
  object: Project_Skills_Insert_Input;
  on_conflict?: InputMaybe<Project_Skills_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProjectsArgs = {
  objects: Array<Projects_Insert_Input>;
  on_conflict?: InputMaybe<Projects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Projects_OneArgs = {
  object: Projects_Insert_Input;
  on_conflict?: InputMaybe<Projects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Remote_CategoryArgs = {
  objects: Array<Remote_Category_Insert_Input>;
  on_conflict?: InputMaybe<Remote_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Remote_Category_OneArgs = {
  object: Remote_Category_Insert_Input;
  on_conflict?: InputMaybe<Remote_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Skill_CategoryArgs = {
  objects: Array<Skill_Category_Insert_Input>;
  on_conflict?: InputMaybe<Skill_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Skill_Category_OneArgs = {
  object: Skill_Category_Insert_Input;
  on_conflict?: InputMaybe<Skill_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SkillsArgs = {
  objects: Array<Skills_Insert_Input>;
  on_conflict?: InputMaybe<Skills_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Skills_OneArgs = {
  object: Skills_Insert_Input;
  on_conflict?: InputMaybe<Skills_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Contact_CategoryArgs = {
  _set?: InputMaybe<Contact_Category_Set_Input>;
  where: Contact_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Contact_Category_By_PkArgs = {
  _set?: InputMaybe<Contact_Category_Set_Input>;
  pk_columns: Contact_Category_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Contact_Category_ManyArgs = {
  updates: Array<Contact_Category_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ContactsArgs = {
  _set?: InputMaybe<Contacts_Set_Input>;
  where: Contacts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Contacts_By_PkArgs = {
  _set?: InputMaybe<Contacts_Set_Input>;
  pk_columns: Contacts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Contacts_ManyArgs = {
  updates: Array<Contacts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Experience_CategoryArgs = {
  _set?: InputMaybe<Experience_Category_Set_Input>;
  where: Experience_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Experience_Category_By_PkArgs = {
  _set?: InputMaybe<Experience_Category_Set_Input>;
  pk_columns: Experience_Category_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Experience_Category_ManyArgs = {
  updates: Array<Experience_Category_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Experience_SkillsArgs = {
  _set?: InputMaybe<Experience_Skills_Set_Input>;
  where: Experience_Skills_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Experience_Skills_By_PkArgs = {
  _set?: InputMaybe<Experience_Skills_Set_Input>;
  pk_columns: Experience_Skills_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Experience_Skills_ManyArgs = {
  updates: Array<Experience_Skills_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ExperiencesArgs = {
  _set?: InputMaybe<Experiences_Set_Input>;
  where: Experiences_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Experiences_By_PkArgs = {
  _set?: InputMaybe<Experiences_Set_Input>;
  pk_columns: Experiences_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Experiences_ManyArgs = {
  updates: Array<Experiences_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Inscription_TypeArgs = {
  _set?: InputMaybe<Inscription_Type_Set_Input>;
  where: Inscription_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Inscription_Type_By_PkArgs = {
  _set?: InputMaybe<Inscription_Type_Set_Input>;
  pk_columns: Inscription_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Inscription_Type_ManyArgs = {
  updates: Array<Inscription_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Project_SkillsArgs = {
  _set?: InputMaybe<Project_Skills_Set_Input>;
  where: Project_Skills_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Project_Skills_By_PkArgs = {
  _set?: InputMaybe<Project_Skills_Set_Input>;
  pk_columns: Project_Skills_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Project_Skills_ManyArgs = {
  updates: Array<Project_Skills_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ProjectsArgs = {
  _set?: InputMaybe<Projects_Set_Input>;
  where: Projects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Projects_By_PkArgs = {
  _set?: InputMaybe<Projects_Set_Input>;
  pk_columns: Projects_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Projects_ManyArgs = {
  updates: Array<Projects_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Remote_CategoryArgs = {
  _set?: InputMaybe<Remote_Category_Set_Input>;
  where: Remote_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Remote_Category_By_PkArgs = {
  _set?: InputMaybe<Remote_Category_Set_Input>;
  pk_columns: Remote_Category_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Remote_Category_ManyArgs = {
  updates: Array<Remote_Category_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Skill_CategoryArgs = {
  _set?: InputMaybe<Skill_Category_Set_Input>;
  where: Skill_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Skill_Category_By_PkArgs = {
  _set?: InputMaybe<Skill_Category_Set_Input>;
  pk_columns: Skill_Category_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Skill_Category_ManyArgs = {
  updates: Array<Skill_Category_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SkillsArgs = {
  _set?: InputMaybe<Skills_Set_Input>;
  where: Skills_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Skills_By_PkArgs = {
  _set?: InputMaybe<Skills_Set_Input>;
  pk_columns: Skills_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Skills_ManyArgs = {
  updates: Array<Skills_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "project_skills" */
export type Project_Skills = {
  __typename?: 'project_skills';
  id: Scalars['uuid'];
  /** An object relationship */
  project: Projects;
  project_id: Scalars['uuid'];
  /** An object relationship */
  skill: Skills;
  skill_id: Scalars['uuid'];
};

/** aggregated selection of "project_skills" */
export type Project_Skills_Aggregate = {
  __typename?: 'project_skills_aggregate';
  aggregate?: Maybe<Project_Skills_Aggregate_Fields>;
  nodes: Array<Project_Skills>;
};

export type Project_Skills_Aggregate_Bool_Exp = {
  count?: InputMaybe<Project_Skills_Aggregate_Bool_Exp_Count>;
};

export type Project_Skills_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Project_Skills_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Project_Skills_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "project_skills" */
export type Project_Skills_Aggregate_Fields = {
  __typename?: 'project_skills_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Project_Skills_Max_Fields>;
  min?: Maybe<Project_Skills_Min_Fields>;
};


/** aggregate fields of "project_skills" */
export type Project_Skills_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Project_Skills_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "project_skills" */
export type Project_Skills_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Project_Skills_Max_Order_By>;
  min?: InputMaybe<Project_Skills_Min_Order_By>;
};

/** input type for inserting array relation for remote table "project_skills" */
export type Project_Skills_Arr_Rel_Insert_Input = {
  data: Array<Project_Skills_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Project_Skills_On_Conflict>;
};

/** Boolean expression to filter rows from the table "project_skills". All fields are combined with a logical 'AND'. */
export type Project_Skills_Bool_Exp = {
  _and?: InputMaybe<Array<Project_Skills_Bool_Exp>>;
  _not?: InputMaybe<Project_Skills_Bool_Exp>;
  _or?: InputMaybe<Array<Project_Skills_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  project?: InputMaybe<Projects_Bool_Exp>;
  project_id?: InputMaybe<Uuid_Comparison_Exp>;
  skill?: InputMaybe<Skills_Bool_Exp>;
  skill_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "project_skills" */
export enum Project_Skills_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProjectSkillsPkey = 'project_skills_pkey',
  /** unique or primary key constraint on columns "skill_id", "project_id" */
  ProjectSkillsProjectIdSkillIdKey = 'project_skills_project_id_skill_id_key'
}

/** input type for inserting data into table "project_skills" */
export type Project_Skills_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  project?: InputMaybe<Projects_Obj_Rel_Insert_Input>;
  project_id?: InputMaybe<Scalars['uuid']>;
  skill?: InputMaybe<Skills_Obj_Rel_Insert_Input>;
  skill_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Project_Skills_Max_Fields = {
  __typename?: 'project_skills_max_fields';
  id?: Maybe<Scalars['uuid']>;
  project_id?: Maybe<Scalars['uuid']>;
  skill_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "project_skills" */
export type Project_Skills_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  skill_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Project_Skills_Min_Fields = {
  __typename?: 'project_skills_min_fields';
  id?: Maybe<Scalars['uuid']>;
  project_id?: Maybe<Scalars['uuid']>;
  skill_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "project_skills" */
export type Project_Skills_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  skill_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "project_skills" */
export type Project_Skills_Mutation_Response = {
  __typename?: 'project_skills_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Project_Skills>;
};

/** on_conflict condition type for table "project_skills" */
export type Project_Skills_On_Conflict = {
  constraint: Project_Skills_Constraint;
  update_columns?: Array<Project_Skills_Update_Column>;
  where?: InputMaybe<Project_Skills_Bool_Exp>;
};

/** Ordering options when selecting data from "project_skills". */
export type Project_Skills_Order_By = {
  id?: InputMaybe<Order_By>;
  project?: InputMaybe<Projects_Order_By>;
  project_id?: InputMaybe<Order_By>;
  skill?: InputMaybe<Skills_Order_By>;
  skill_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: project_skills */
export type Project_Skills_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "project_skills" */
export enum Project_Skills_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  SkillId = 'skill_id'
}

/** input type for updating data in table "project_skills" */
export type Project_Skills_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  project_id?: InputMaybe<Scalars['uuid']>;
  skill_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "project_skills" */
export type Project_Skills_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Project_Skills_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Project_Skills_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  project_id?: InputMaybe<Scalars['uuid']>;
  skill_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "project_skills" */
export enum Project_Skills_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  SkillId = 'skill_id'
}

export type Project_Skills_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Project_Skills_Set_Input>;
  /** filter the rows which have to be updated */
  where: Project_Skills_Bool_Exp;
};

/** columns and relationships of "projects" */
export type Projects = {
  __typename?: 'projects';
  date_end?: Maybe<Scalars['date']>;
  date_start: Scalars['date'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  inscription?: Maybe<Scalars['String']>;
  /** An object relationship */
  inscriptionTypeByInscriptionType: Inscription_Type;
  inscription_href?: Maybe<Scalars['String']>;
  inscription_type: Inscription_Type_Enum;
  /** separated by the newline ("\n") character */
  items?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  name_href?: Maybe<Scalars['String']>;
  /** An array relationship */
  project_skills: Array<Project_Skills>;
  /** An aggregate relationship */
  project_skills_aggregate: Project_Skills_Aggregate;
  visible: Scalars['Boolean'];
};


/** columns and relationships of "projects" */
export type ProjectsProject_SkillsArgs = {
  distinct_on?: InputMaybe<Array<Project_Skills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Skills_Order_By>>;
  where?: InputMaybe<Project_Skills_Bool_Exp>;
};


/** columns and relationships of "projects" */
export type ProjectsProject_Skills_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_Skills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Skills_Order_By>>;
  where?: InputMaybe<Project_Skills_Bool_Exp>;
};

/** aggregated selection of "projects" */
export type Projects_Aggregate = {
  __typename?: 'projects_aggregate';
  aggregate?: Maybe<Projects_Aggregate_Fields>;
  nodes: Array<Projects>;
};

export type Projects_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Projects_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Projects_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Projects_Aggregate_Bool_Exp_Count>;
};

export type Projects_Aggregate_Bool_Exp_Bool_And = {
  arguments: Projects_Select_Column_Projects_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Projects_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Projects_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Projects_Select_Column_Projects_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Projects_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Projects_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Projects_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Projects_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "projects" */
export type Projects_Aggregate_Fields = {
  __typename?: 'projects_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Projects_Max_Fields>;
  min?: Maybe<Projects_Min_Fields>;
};


/** aggregate fields of "projects" */
export type Projects_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Projects_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "projects" */
export type Projects_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Projects_Max_Order_By>;
  min?: InputMaybe<Projects_Min_Order_By>;
};

/** input type for inserting array relation for remote table "projects" */
export type Projects_Arr_Rel_Insert_Input = {
  data: Array<Projects_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Projects_On_Conflict>;
};

/** Boolean expression to filter rows from the table "projects". All fields are combined with a logical 'AND'. */
export type Projects_Bool_Exp = {
  _and?: InputMaybe<Array<Projects_Bool_Exp>>;
  _not?: InputMaybe<Projects_Bool_Exp>;
  _or?: InputMaybe<Array<Projects_Bool_Exp>>;
  date_end?: InputMaybe<Date_Comparison_Exp>;
  date_start?: InputMaybe<Date_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  inscription?: InputMaybe<String_Comparison_Exp>;
  inscriptionTypeByInscriptionType?: InputMaybe<Inscription_Type_Bool_Exp>;
  inscription_href?: InputMaybe<String_Comparison_Exp>;
  inscription_type?: InputMaybe<Inscription_Type_Enum_Comparison_Exp>;
  items?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  name_href?: InputMaybe<String_Comparison_Exp>;
  project_skills?: InputMaybe<Project_Skills_Bool_Exp>;
  project_skills_aggregate?: InputMaybe<Project_Skills_Aggregate_Bool_Exp>;
  visible?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "projects" */
export enum Projects_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProjectsPkey = 'projects_pkey'
}

/** input type for inserting data into table "projects" */
export type Projects_Insert_Input = {
  date_end?: InputMaybe<Scalars['date']>;
  date_start?: InputMaybe<Scalars['date']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  inscription?: InputMaybe<Scalars['String']>;
  inscriptionTypeByInscriptionType?: InputMaybe<Inscription_Type_Obj_Rel_Insert_Input>;
  inscription_href?: InputMaybe<Scalars['String']>;
  inscription_type?: InputMaybe<Inscription_Type_Enum>;
  /** separated by the newline ("\n") character */
  items?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_href?: InputMaybe<Scalars['String']>;
  project_skills?: InputMaybe<Project_Skills_Arr_Rel_Insert_Input>;
  visible?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Projects_Max_Fields = {
  __typename?: 'projects_max_fields';
  date_end?: Maybe<Scalars['date']>;
  date_start?: Maybe<Scalars['date']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  inscription?: Maybe<Scalars['String']>;
  inscription_href?: Maybe<Scalars['String']>;
  /** separated by the newline ("\n") character */
  items?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  name_href?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "projects" */
export type Projects_Max_Order_By = {
  date_end?: InputMaybe<Order_By>;
  date_start?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inscription?: InputMaybe<Order_By>;
  inscription_href?: InputMaybe<Order_By>;
  /** separated by the newline ("\n") character */
  items?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  name_href?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Projects_Min_Fields = {
  __typename?: 'projects_min_fields';
  date_end?: Maybe<Scalars['date']>;
  date_start?: Maybe<Scalars['date']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  inscription?: Maybe<Scalars['String']>;
  inscription_href?: Maybe<Scalars['String']>;
  /** separated by the newline ("\n") character */
  items?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  name_href?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "projects" */
export type Projects_Min_Order_By = {
  date_end?: InputMaybe<Order_By>;
  date_start?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inscription?: InputMaybe<Order_By>;
  inscription_href?: InputMaybe<Order_By>;
  /** separated by the newline ("\n") character */
  items?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  name_href?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "projects" */
export type Projects_Mutation_Response = {
  __typename?: 'projects_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Projects>;
};

/** input type for inserting object relation for remote table "projects" */
export type Projects_Obj_Rel_Insert_Input = {
  data: Projects_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Projects_On_Conflict>;
};

/** on_conflict condition type for table "projects" */
export type Projects_On_Conflict = {
  constraint: Projects_Constraint;
  update_columns?: Array<Projects_Update_Column>;
  where?: InputMaybe<Projects_Bool_Exp>;
};

/** Ordering options when selecting data from "projects". */
export type Projects_Order_By = {
  date_end?: InputMaybe<Order_By>;
  date_start?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inscription?: InputMaybe<Order_By>;
  inscriptionTypeByInscriptionType?: InputMaybe<Inscription_Type_Order_By>;
  inscription_href?: InputMaybe<Order_By>;
  inscription_type?: InputMaybe<Order_By>;
  items?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  name_href?: InputMaybe<Order_By>;
  project_skills_aggregate?: InputMaybe<Project_Skills_Aggregate_Order_By>;
  visible?: InputMaybe<Order_By>;
};

/** primary key columns input for table: projects */
export type Projects_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "projects" */
export enum Projects_Select_Column {
  /** column name */
  DateEnd = 'date_end',
  /** column name */
  DateStart = 'date_start',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Inscription = 'inscription',
  /** column name */
  InscriptionHref = 'inscription_href',
  /** column name */
  InscriptionType = 'inscription_type',
  /** column name */
  Items = 'items',
  /** column name */
  Name = 'name',
  /** column name */
  NameHref = 'name_href',
  /** column name */
  Visible = 'visible'
}

/** select "projects_aggregate_bool_exp_bool_and_arguments_columns" columns of table "projects" */
export enum Projects_Select_Column_Projects_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Visible = 'visible'
}

/** select "projects_aggregate_bool_exp_bool_or_arguments_columns" columns of table "projects" */
export enum Projects_Select_Column_Projects_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Visible = 'visible'
}

/** input type for updating data in table "projects" */
export type Projects_Set_Input = {
  date_end?: InputMaybe<Scalars['date']>;
  date_start?: InputMaybe<Scalars['date']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  inscription?: InputMaybe<Scalars['String']>;
  inscription_href?: InputMaybe<Scalars['String']>;
  inscription_type?: InputMaybe<Inscription_Type_Enum>;
  /** separated by the newline ("\n") character */
  items?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_href?: InputMaybe<Scalars['String']>;
  visible?: InputMaybe<Scalars['Boolean']>;
};

/** Streaming cursor of the table "projects" */
export type Projects_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Projects_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Projects_Stream_Cursor_Value_Input = {
  date_end?: InputMaybe<Scalars['date']>;
  date_start?: InputMaybe<Scalars['date']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  inscription?: InputMaybe<Scalars['String']>;
  inscription_href?: InputMaybe<Scalars['String']>;
  inscription_type?: InputMaybe<Inscription_Type_Enum>;
  /** separated by the newline ("\n") character */
  items?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_href?: InputMaybe<Scalars['String']>;
  visible?: InputMaybe<Scalars['Boolean']>;
};

/** update columns of table "projects" */
export enum Projects_Update_Column {
  /** column name */
  DateEnd = 'date_end',
  /** column name */
  DateStart = 'date_start',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Inscription = 'inscription',
  /** column name */
  InscriptionHref = 'inscription_href',
  /** column name */
  InscriptionType = 'inscription_type',
  /** column name */
  Items = 'items',
  /** column name */
  Name = 'name',
  /** column name */
  NameHref = 'name_href',
  /** column name */
  Visible = 'visible'
}

export type Projects_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Projects_Set_Input>;
  /** filter the rows which have to be updated */
  where: Projects_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "contact_category" */
  contact_category: Array<Contact_Category>;
  /** fetch aggregated fields from the table: "contact_category" */
  contact_category_aggregate: Contact_Category_Aggregate;
  /** fetch data from the table: "contact_category" using primary key columns */
  contact_category_by_pk?: Maybe<Contact_Category>;
  /** An array relationship */
  contacts: Array<Contacts>;
  /** An aggregate relationship */
  contacts_aggregate: Contacts_Aggregate;
  /** fetch data from the table: "contacts" using primary key columns */
  contacts_by_pk?: Maybe<Contacts>;
  /** fetch data from the table: "experience_category" */
  experience_category: Array<Experience_Category>;
  /** fetch aggregated fields from the table: "experience_category" */
  experience_category_aggregate: Experience_Category_Aggregate;
  /** fetch data from the table: "experience_category" using primary key columns */
  experience_category_by_pk?: Maybe<Experience_Category>;
  /** An array relationship */
  experience_skills: Array<Experience_Skills>;
  /** An aggregate relationship */
  experience_skills_aggregate: Experience_Skills_Aggregate;
  /** fetch data from the table: "experience_skills" using primary key columns */
  experience_skills_by_pk?: Maybe<Experience_Skills>;
  /** An array relationship */
  experiences: Array<Experiences>;
  /** An aggregate relationship */
  experiences_aggregate: Experiences_Aggregate;
  /** fetch data from the table: "experiences" using primary key columns */
  experiences_by_pk?: Maybe<Experiences>;
  /** fetch data from the table: "inscription_type" */
  inscription_type: Array<Inscription_Type>;
  /** fetch aggregated fields from the table: "inscription_type" */
  inscription_type_aggregate: Inscription_Type_Aggregate;
  /** fetch data from the table: "inscription_type" using primary key columns */
  inscription_type_by_pk?: Maybe<Inscription_Type>;
  /** An array relationship */
  project_skills: Array<Project_Skills>;
  /** An aggregate relationship */
  project_skills_aggregate: Project_Skills_Aggregate;
  /** fetch data from the table: "project_skills" using primary key columns */
  project_skills_by_pk?: Maybe<Project_Skills>;
  /** An array relationship */
  projects: Array<Projects>;
  /** An aggregate relationship */
  projects_aggregate: Projects_Aggregate;
  /** fetch data from the table: "projects" using primary key columns */
  projects_by_pk?: Maybe<Projects>;
  /** fetch data from the table: "remote_category" */
  remote_category: Array<Remote_Category>;
  /** fetch aggregated fields from the table: "remote_category" */
  remote_category_aggregate: Remote_Category_Aggregate;
  /** fetch data from the table: "remote_category" using primary key columns */
  remote_category_by_pk?: Maybe<Remote_Category>;
  /** fetch data from the table: "skill_category" */
  skill_category: Array<Skill_Category>;
  /** fetch aggregated fields from the table: "skill_category" */
  skill_category_aggregate: Skill_Category_Aggregate;
  /** fetch data from the table: "skill_category" using primary key columns */
  skill_category_by_pk?: Maybe<Skill_Category>;
  /** An array relationship */
  skills: Array<Skills>;
  /** An aggregate relationship */
  skills_aggregate: Skills_Aggregate;
  /** fetch data from the table: "skills" using primary key columns */
  skills_by_pk?: Maybe<Skills>;
};


export type Query_RootContact_CategoryArgs = {
  distinct_on?: InputMaybe<Array<Contact_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contact_Category_Order_By>>;
  where?: InputMaybe<Contact_Category_Bool_Exp>;
};


export type Query_RootContact_Category_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contact_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contact_Category_Order_By>>;
  where?: InputMaybe<Contact_Category_Bool_Exp>;
};


export type Query_RootContact_Category_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootContactsArgs = {
  distinct_on?: InputMaybe<Array<Contacts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contacts_Order_By>>;
  where?: InputMaybe<Contacts_Bool_Exp>;
};


export type Query_RootContacts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contacts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contacts_Order_By>>;
  where?: InputMaybe<Contacts_Bool_Exp>;
};


export type Query_RootContacts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootExperience_CategoryArgs = {
  distinct_on?: InputMaybe<Array<Experience_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Experience_Category_Order_By>>;
  where?: InputMaybe<Experience_Category_Bool_Exp>;
};


export type Query_RootExperience_Category_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Experience_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Experience_Category_Order_By>>;
  where?: InputMaybe<Experience_Category_Bool_Exp>;
};


export type Query_RootExperience_Category_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootExperience_SkillsArgs = {
  distinct_on?: InputMaybe<Array<Experience_Skills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Experience_Skills_Order_By>>;
  where?: InputMaybe<Experience_Skills_Bool_Exp>;
};


export type Query_RootExperience_Skills_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Experience_Skills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Experience_Skills_Order_By>>;
  where?: InputMaybe<Experience_Skills_Bool_Exp>;
};


export type Query_RootExperience_Skills_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootExperiencesArgs = {
  distinct_on?: InputMaybe<Array<Experiences_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Experiences_Order_By>>;
  where?: InputMaybe<Experiences_Bool_Exp>;
};


export type Query_RootExperiences_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Experiences_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Experiences_Order_By>>;
  where?: InputMaybe<Experiences_Bool_Exp>;
};


export type Query_RootExperiences_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootInscription_TypeArgs = {
  distinct_on?: InputMaybe<Array<Inscription_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Inscription_Type_Order_By>>;
  where?: InputMaybe<Inscription_Type_Bool_Exp>;
};


export type Query_RootInscription_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Inscription_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Inscription_Type_Order_By>>;
  where?: InputMaybe<Inscription_Type_Bool_Exp>;
};


export type Query_RootInscription_Type_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootProject_SkillsArgs = {
  distinct_on?: InputMaybe<Array<Project_Skills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Skills_Order_By>>;
  where?: InputMaybe<Project_Skills_Bool_Exp>;
};


export type Query_RootProject_Skills_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_Skills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Skills_Order_By>>;
  where?: InputMaybe<Project_Skills_Bool_Exp>;
};


export type Query_RootProject_Skills_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootProjectsArgs = {
  distinct_on?: InputMaybe<Array<Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Projects_Order_By>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};


export type Query_RootProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Projects_Order_By>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};


export type Query_RootProjects_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRemote_CategoryArgs = {
  distinct_on?: InputMaybe<Array<Remote_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Remote_Category_Order_By>>;
  where?: InputMaybe<Remote_Category_Bool_Exp>;
};


export type Query_RootRemote_Category_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Remote_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Remote_Category_Order_By>>;
  where?: InputMaybe<Remote_Category_Bool_Exp>;
};


export type Query_RootRemote_Category_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootSkill_CategoryArgs = {
  distinct_on?: InputMaybe<Array<Skill_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Skill_Category_Order_By>>;
  where?: InputMaybe<Skill_Category_Bool_Exp>;
};


export type Query_RootSkill_Category_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Skill_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Skill_Category_Order_By>>;
  where?: InputMaybe<Skill_Category_Bool_Exp>;
};


export type Query_RootSkill_Category_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootSkillsArgs = {
  distinct_on?: InputMaybe<Array<Skills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Skills_Order_By>>;
  where?: InputMaybe<Skills_Bool_Exp>;
};


export type Query_RootSkills_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Skills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Skills_Order_By>>;
  where?: InputMaybe<Skills_Bool_Exp>;
};


export type Query_RootSkills_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "remote_category" */
export type Remote_Category = {
  __typename?: 'remote_category';
  description?: Maybe<Scalars['String']>;
  /** An array relationship */
  experiences: Array<Experiences>;
  /** An aggregate relationship */
  experiences_aggregate: Experiences_Aggregate;
  id: Scalars['String'];
};


/** columns and relationships of "remote_category" */
export type Remote_CategoryExperiencesArgs = {
  distinct_on?: InputMaybe<Array<Experiences_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Experiences_Order_By>>;
  where?: InputMaybe<Experiences_Bool_Exp>;
};


/** columns and relationships of "remote_category" */
export type Remote_CategoryExperiences_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Experiences_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Experiences_Order_By>>;
  where?: InputMaybe<Experiences_Bool_Exp>;
};

/** aggregated selection of "remote_category" */
export type Remote_Category_Aggregate = {
  __typename?: 'remote_category_aggregate';
  aggregate?: Maybe<Remote_Category_Aggregate_Fields>;
  nodes: Array<Remote_Category>;
};

/** aggregate fields of "remote_category" */
export type Remote_Category_Aggregate_Fields = {
  __typename?: 'remote_category_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Remote_Category_Max_Fields>;
  min?: Maybe<Remote_Category_Min_Fields>;
};


/** aggregate fields of "remote_category" */
export type Remote_Category_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Remote_Category_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "remote_category". All fields are combined with a logical 'AND'. */
export type Remote_Category_Bool_Exp = {
  _and?: InputMaybe<Array<Remote_Category_Bool_Exp>>;
  _not?: InputMaybe<Remote_Category_Bool_Exp>;
  _or?: InputMaybe<Array<Remote_Category_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  experiences?: InputMaybe<Experiences_Bool_Exp>;
  experiences_aggregate?: InputMaybe<Experiences_Aggregate_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "remote_category" */
export enum Remote_Category_Constraint {
  /** unique or primary key constraint on columns "id" */
  RemoteCategoryPkey = 'remote_category_pkey'
}

export enum Remote_Category_Enum {
  Hybrid = 'HYBRID',
  Onsite = 'ONSITE',
  Remote = 'REMOTE'
}

/** Boolean expression to compare columns of type "remote_category_enum". All fields are combined with logical 'AND'. */
export type Remote_Category_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Remote_Category_Enum>;
  _in?: InputMaybe<Array<Remote_Category_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Remote_Category_Enum>;
  _nin?: InputMaybe<Array<Remote_Category_Enum>>;
};

/** input type for inserting data into table "remote_category" */
export type Remote_Category_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  experiences?: InputMaybe<Experiences_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Remote_Category_Max_Fields = {
  __typename?: 'remote_category_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Remote_Category_Min_Fields = {
  __typename?: 'remote_category_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "remote_category" */
export type Remote_Category_Mutation_Response = {
  __typename?: 'remote_category_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Remote_Category>;
};

/** input type for inserting object relation for remote table "remote_category" */
export type Remote_Category_Obj_Rel_Insert_Input = {
  data: Remote_Category_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Remote_Category_On_Conflict>;
};

/** on_conflict condition type for table "remote_category" */
export type Remote_Category_On_Conflict = {
  constraint: Remote_Category_Constraint;
  update_columns?: Array<Remote_Category_Update_Column>;
  where?: InputMaybe<Remote_Category_Bool_Exp>;
};

/** Ordering options when selecting data from "remote_category". */
export type Remote_Category_Order_By = {
  description?: InputMaybe<Order_By>;
  experiences_aggregate?: InputMaybe<Experiences_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: remote_category */
export type Remote_Category_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "remote_category" */
export enum Remote_Category_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "remote_category" */
export type Remote_Category_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "remote_category" */
export type Remote_Category_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Remote_Category_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Remote_Category_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "remote_category" */
export enum Remote_Category_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id'
}

export type Remote_Category_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Remote_Category_Set_Input>;
  /** filter the rows which have to be updated */
  where: Remote_Category_Bool_Exp;
};

/** columns and relationships of "skill_category" */
export type Skill_Category = {
  __typename?: 'skill_category';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  /** An array relationship */
  skills: Array<Skills>;
  /** An aggregate relationship */
  skills_aggregate: Skills_Aggregate;
};


/** columns and relationships of "skill_category" */
export type Skill_CategorySkillsArgs = {
  distinct_on?: InputMaybe<Array<Skills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Skills_Order_By>>;
  where?: InputMaybe<Skills_Bool_Exp>;
};


/** columns and relationships of "skill_category" */
export type Skill_CategorySkills_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Skills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Skills_Order_By>>;
  where?: InputMaybe<Skills_Bool_Exp>;
};

/** aggregated selection of "skill_category" */
export type Skill_Category_Aggregate = {
  __typename?: 'skill_category_aggregate';
  aggregate?: Maybe<Skill_Category_Aggregate_Fields>;
  nodes: Array<Skill_Category>;
};

/** aggregate fields of "skill_category" */
export type Skill_Category_Aggregate_Fields = {
  __typename?: 'skill_category_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Skill_Category_Max_Fields>;
  min?: Maybe<Skill_Category_Min_Fields>;
};


/** aggregate fields of "skill_category" */
export type Skill_Category_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Skill_Category_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "skill_category". All fields are combined with a logical 'AND'. */
export type Skill_Category_Bool_Exp = {
  _and?: InputMaybe<Array<Skill_Category_Bool_Exp>>;
  _not?: InputMaybe<Skill_Category_Bool_Exp>;
  _or?: InputMaybe<Array<Skill_Category_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  skills?: InputMaybe<Skills_Bool_Exp>;
  skills_aggregate?: InputMaybe<Skills_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "skill_category" */
export enum Skill_Category_Constraint {
  /** unique or primary key constraint on columns "id" */
  SkillCategoryPkey = 'skill_category_pkey'
}

export enum Skill_Category_Enum {
  FrameworkOrLibrary = 'FRAMEWORK_OR_LIBRARY',
  Language = 'LANGUAGE',
  OtherSkillOrTool = 'OTHER_SKILL_OR_TOOL',
  ProgrammingLanguage = 'PROGRAMMING_LANGUAGE'
}

/** Boolean expression to compare columns of type "skill_category_enum". All fields are combined with logical 'AND'. */
export type Skill_Category_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Skill_Category_Enum>;
  _in?: InputMaybe<Array<Skill_Category_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Skill_Category_Enum>;
  _nin?: InputMaybe<Array<Skill_Category_Enum>>;
};

/** input type for inserting data into table "skill_category" */
export type Skill_Category_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  skills?: InputMaybe<Skills_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Skill_Category_Max_Fields = {
  __typename?: 'skill_category_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Skill_Category_Min_Fields = {
  __typename?: 'skill_category_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "skill_category" */
export type Skill_Category_Mutation_Response = {
  __typename?: 'skill_category_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Skill_Category>;
};

/** input type for inserting object relation for remote table "skill_category" */
export type Skill_Category_Obj_Rel_Insert_Input = {
  data: Skill_Category_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Skill_Category_On_Conflict>;
};

/** on_conflict condition type for table "skill_category" */
export type Skill_Category_On_Conflict = {
  constraint: Skill_Category_Constraint;
  update_columns?: Array<Skill_Category_Update_Column>;
  where?: InputMaybe<Skill_Category_Bool_Exp>;
};

/** Ordering options when selecting data from "skill_category". */
export type Skill_Category_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  skills_aggregate?: InputMaybe<Skills_Aggregate_Order_By>;
};

/** primary key columns input for table: skill_category */
export type Skill_Category_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "skill_category" */
export enum Skill_Category_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "skill_category" */
export type Skill_Category_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "skill_category" */
export type Skill_Category_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Skill_Category_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Skill_Category_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "skill_category" */
export enum Skill_Category_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id'
}

export type Skill_Category_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Skill_Category_Set_Input>;
  /** filter the rows which have to be updated */
  where: Skill_Category_Bool_Exp;
};

/** columns and relationships of "skills" */
export type Skills = {
  __typename?: 'skills';
  category: Skill_Category_Enum;
  description?: Maybe<Scalars['String']>;
  /** An array relationship */
  experience_skills: Array<Experience_Skills>;
  /** An aggregate relationship */
  experience_skills_aggregate: Experience_Skills_Aggregate;
  href?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  project_skills: Array<Project_Skills>;
  /** An aggregate relationship */
  project_skills_aggregate: Project_Skills_Aggregate;
  /** An object relationship */
  skill_category: Skill_Category;
  visible: Scalars['Boolean'];
};


/** columns and relationships of "skills" */
export type SkillsExperience_SkillsArgs = {
  distinct_on?: InputMaybe<Array<Experience_Skills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Experience_Skills_Order_By>>;
  where?: InputMaybe<Experience_Skills_Bool_Exp>;
};


/** columns and relationships of "skills" */
export type SkillsExperience_Skills_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Experience_Skills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Experience_Skills_Order_By>>;
  where?: InputMaybe<Experience_Skills_Bool_Exp>;
};


/** columns and relationships of "skills" */
export type SkillsProject_SkillsArgs = {
  distinct_on?: InputMaybe<Array<Project_Skills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Skills_Order_By>>;
  where?: InputMaybe<Project_Skills_Bool_Exp>;
};


/** columns and relationships of "skills" */
export type SkillsProject_Skills_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_Skills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Skills_Order_By>>;
  where?: InputMaybe<Project_Skills_Bool_Exp>;
};

/** aggregated selection of "skills" */
export type Skills_Aggregate = {
  __typename?: 'skills_aggregate';
  aggregate?: Maybe<Skills_Aggregate_Fields>;
  nodes: Array<Skills>;
};

export type Skills_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Skills_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Skills_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Skills_Aggregate_Bool_Exp_Count>;
};

export type Skills_Aggregate_Bool_Exp_Bool_And = {
  arguments: Skills_Select_Column_Skills_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Skills_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Skills_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Skills_Select_Column_Skills_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Skills_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Skills_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Skills_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Skills_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "skills" */
export type Skills_Aggregate_Fields = {
  __typename?: 'skills_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Skills_Max_Fields>;
  min?: Maybe<Skills_Min_Fields>;
};


/** aggregate fields of "skills" */
export type Skills_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Skills_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "skills" */
export type Skills_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Skills_Max_Order_By>;
  min?: InputMaybe<Skills_Min_Order_By>;
};

/** input type for inserting array relation for remote table "skills" */
export type Skills_Arr_Rel_Insert_Input = {
  data: Array<Skills_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Skills_On_Conflict>;
};

/** Boolean expression to filter rows from the table "skills". All fields are combined with a logical 'AND'. */
export type Skills_Bool_Exp = {
  _and?: InputMaybe<Array<Skills_Bool_Exp>>;
  _not?: InputMaybe<Skills_Bool_Exp>;
  _or?: InputMaybe<Array<Skills_Bool_Exp>>;
  category?: InputMaybe<Skill_Category_Enum_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  experience_skills?: InputMaybe<Experience_Skills_Bool_Exp>;
  experience_skills_aggregate?: InputMaybe<Experience_Skills_Aggregate_Bool_Exp>;
  href?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  project_skills?: InputMaybe<Project_Skills_Bool_Exp>;
  project_skills_aggregate?: InputMaybe<Project_Skills_Aggregate_Bool_Exp>;
  skill_category?: InputMaybe<Skill_Category_Bool_Exp>;
  visible?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "skills" */
export enum Skills_Constraint {
  /** unique or primary key constraint on columns "name" */
  SkillsNameKey = 'skills_name_key',
  /** unique or primary key constraint on columns "id" */
  SkillsPkey = 'skills_pkey'
}

/** input type for inserting data into table "skills" */
export type Skills_Insert_Input = {
  category?: InputMaybe<Skill_Category_Enum>;
  description?: InputMaybe<Scalars['String']>;
  experience_skills?: InputMaybe<Experience_Skills_Arr_Rel_Insert_Input>;
  href?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  project_skills?: InputMaybe<Project_Skills_Arr_Rel_Insert_Input>;
  skill_category?: InputMaybe<Skill_Category_Obj_Rel_Insert_Input>;
  visible?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Skills_Max_Fields = {
  __typename?: 'skills_max_fields';
  description?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "skills" */
export type Skills_Max_Order_By = {
  description?: InputMaybe<Order_By>;
  href?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Skills_Min_Fields = {
  __typename?: 'skills_min_fields';
  description?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "skills" */
export type Skills_Min_Order_By = {
  description?: InputMaybe<Order_By>;
  href?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "skills" */
export type Skills_Mutation_Response = {
  __typename?: 'skills_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Skills>;
};

/** input type for inserting object relation for remote table "skills" */
export type Skills_Obj_Rel_Insert_Input = {
  data: Skills_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Skills_On_Conflict>;
};

/** on_conflict condition type for table "skills" */
export type Skills_On_Conflict = {
  constraint: Skills_Constraint;
  update_columns?: Array<Skills_Update_Column>;
  where?: InputMaybe<Skills_Bool_Exp>;
};

/** Ordering options when selecting data from "skills". */
export type Skills_Order_By = {
  category?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  experience_skills_aggregate?: InputMaybe<Experience_Skills_Aggregate_Order_By>;
  href?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  project_skills_aggregate?: InputMaybe<Project_Skills_Aggregate_Order_By>;
  skill_category?: InputMaybe<Skill_Category_Order_By>;
  visible?: InputMaybe<Order_By>;
};

/** primary key columns input for table: skills */
export type Skills_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "skills" */
export enum Skills_Select_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Description = 'description',
  /** column name */
  Href = 'href',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Visible = 'visible'
}

/** select "skills_aggregate_bool_exp_bool_and_arguments_columns" columns of table "skills" */
export enum Skills_Select_Column_Skills_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Visible = 'visible'
}

/** select "skills_aggregate_bool_exp_bool_or_arguments_columns" columns of table "skills" */
export enum Skills_Select_Column_Skills_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Visible = 'visible'
}

/** input type for updating data in table "skills" */
export type Skills_Set_Input = {
  category?: InputMaybe<Skill_Category_Enum>;
  description?: InputMaybe<Scalars['String']>;
  href?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  visible?: InputMaybe<Scalars['Boolean']>;
};

/** Streaming cursor of the table "skills" */
export type Skills_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Skills_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Skills_Stream_Cursor_Value_Input = {
  category?: InputMaybe<Skill_Category_Enum>;
  description?: InputMaybe<Scalars['String']>;
  href?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  visible?: InputMaybe<Scalars['Boolean']>;
};

/** update columns of table "skills" */
export enum Skills_Update_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Description = 'description',
  /** column name */
  Href = 'href',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Visible = 'visible'
}

export type Skills_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Skills_Set_Input>;
  /** filter the rows which have to be updated */
  where: Skills_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "contact_category" */
  contact_category: Array<Contact_Category>;
  /** fetch aggregated fields from the table: "contact_category" */
  contact_category_aggregate: Contact_Category_Aggregate;
  /** fetch data from the table: "contact_category" using primary key columns */
  contact_category_by_pk?: Maybe<Contact_Category>;
  /** fetch data from the table in a streaming manner: "contact_category" */
  contact_category_stream: Array<Contact_Category>;
  /** An array relationship */
  contacts: Array<Contacts>;
  /** An aggregate relationship */
  contacts_aggregate: Contacts_Aggregate;
  /** fetch data from the table: "contacts" using primary key columns */
  contacts_by_pk?: Maybe<Contacts>;
  /** fetch data from the table in a streaming manner: "contacts" */
  contacts_stream: Array<Contacts>;
  /** fetch data from the table: "experience_category" */
  experience_category: Array<Experience_Category>;
  /** fetch aggregated fields from the table: "experience_category" */
  experience_category_aggregate: Experience_Category_Aggregate;
  /** fetch data from the table: "experience_category" using primary key columns */
  experience_category_by_pk?: Maybe<Experience_Category>;
  /** fetch data from the table in a streaming manner: "experience_category" */
  experience_category_stream: Array<Experience_Category>;
  /** An array relationship */
  experience_skills: Array<Experience_Skills>;
  /** An aggregate relationship */
  experience_skills_aggregate: Experience_Skills_Aggregate;
  /** fetch data from the table: "experience_skills" using primary key columns */
  experience_skills_by_pk?: Maybe<Experience_Skills>;
  /** fetch data from the table in a streaming manner: "experience_skills" */
  experience_skills_stream: Array<Experience_Skills>;
  /** An array relationship */
  experiences: Array<Experiences>;
  /** An aggregate relationship */
  experiences_aggregate: Experiences_Aggregate;
  /** fetch data from the table: "experiences" using primary key columns */
  experiences_by_pk?: Maybe<Experiences>;
  /** fetch data from the table in a streaming manner: "experiences" */
  experiences_stream: Array<Experiences>;
  /** fetch data from the table: "inscription_type" */
  inscription_type: Array<Inscription_Type>;
  /** fetch aggregated fields from the table: "inscription_type" */
  inscription_type_aggregate: Inscription_Type_Aggregate;
  /** fetch data from the table: "inscription_type" using primary key columns */
  inscription_type_by_pk?: Maybe<Inscription_Type>;
  /** fetch data from the table in a streaming manner: "inscription_type" */
  inscription_type_stream: Array<Inscription_Type>;
  /** An array relationship */
  project_skills: Array<Project_Skills>;
  /** An aggregate relationship */
  project_skills_aggregate: Project_Skills_Aggregate;
  /** fetch data from the table: "project_skills" using primary key columns */
  project_skills_by_pk?: Maybe<Project_Skills>;
  /** fetch data from the table in a streaming manner: "project_skills" */
  project_skills_stream: Array<Project_Skills>;
  /** An array relationship */
  projects: Array<Projects>;
  /** An aggregate relationship */
  projects_aggregate: Projects_Aggregate;
  /** fetch data from the table: "projects" using primary key columns */
  projects_by_pk?: Maybe<Projects>;
  /** fetch data from the table in a streaming manner: "projects" */
  projects_stream: Array<Projects>;
  /** fetch data from the table: "remote_category" */
  remote_category: Array<Remote_Category>;
  /** fetch aggregated fields from the table: "remote_category" */
  remote_category_aggregate: Remote_Category_Aggregate;
  /** fetch data from the table: "remote_category" using primary key columns */
  remote_category_by_pk?: Maybe<Remote_Category>;
  /** fetch data from the table in a streaming manner: "remote_category" */
  remote_category_stream: Array<Remote_Category>;
  /** fetch data from the table: "skill_category" */
  skill_category: Array<Skill_Category>;
  /** fetch aggregated fields from the table: "skill_category" */
  skill_category_aggregate: Skill_Category_Aggregate;
  /** fetch data from the table: "skill_category" using primary key columns */
  skill_category_by_pk?: Maybe<Skill_Category>;
  /** fetch data from the table in a streaming manner: "skill_category" */
  skill_category_stream: Array<Skill_Category>;
  /** An array relationship */
  skills: Array<Skills>;
  /** An aggregate relationship */
  skills_aggregate: Skills_Aggregate;
  /** fetch data from the table: "skills" using primary key columns */
  skills_by_pk?: Maybe<Skills>;
  /** fetch data from the table in a streaming manner: "skills" */
  skills_stream: Array<Skills>;
};


export type Subscription_RootContact_CategoryArgs = {
  distinct_on?: InputMaybe<Array<Contact_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contact_Category_Order_By>>;
  where?: InputMaybe<Contact_Category_Bool_Exp>;
};


export type Subscription_RootContact_Category_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contact_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contact_Category_Order_By>>;
  where?: InputMaybe<Contact_Category_Bool_Exp>;
};


export type Subscription_RootContact_Category_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootContact_Category_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Contact_Category_Stream_Cursor_Input>>;
  where?: InputMaybe<Contact_Category_Bool_Exp>;
};


export type Subscription_RootContactsArgs = {
  distinct_on?: InputMaybe<Array<Contacts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contacts_Order_By>>;
  where?: InputMaybe<Contacts_Bool_Exp>;
};


export type Subscription_RootContacts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contacts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contacts_Order_By>>;
  where?: InputMaybe<Contacts_Bool_Exp>;
};


export type Subscription_RootContacts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootContacts_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Contacts_Stream_Cursor_Input>>;
  where?: InputMaybe<Contacts_Bool_Exp>;
};


export type Subscription_RootExperience_CategoryArgs = {
  distinct_on?: InputMaybe<Array<Experience_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Experience_Category_Order_By>>;
  where?: InputMaybe<Experience_Category_Bool_Exp>;
};


export type Subscription_RootExperience_Category_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Experience_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Experience_Category_Order_By>>;
  where?: InputMaybe<Experience_Category_Bool_Exp>;
};


export type Subscription_RootExperience_Category_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootExperience_Category_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Experience_Category_Stream_Cursor_Input>>;
  where?: InputMaybe<Experience_Category_Bool_Exp>;
};


export type Subscription_RootExperience_SkillsArgs = {
  distinct_on?: InputMaybe<Array<Experience_Skills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Experience_Skills_Order_By>>;
  where?: InputMaybe<Experience_Skills_Bool_Exp>;
};


export type Subscription_RootExperience_Skills_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Experience_Skills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Experience_Skills_Order_By>>;
  where?: InputMaybe<Experience_Skills_Bool_Exp>;
};


export type Subscription_RootExperience_Skills_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootExperience_Skills_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Experience_Skills_Stream_Cursor_Input>>;
  where?: InputMaybe<Experience_Skills_Bool_Exp>;
};


export type Subscription_RootExperiencesArgs = {
  distinct_on?: InputMaybe<Array<Experiences_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Experiences_Order_By>>;
  where?: InputMaybe<Experiences_Bool_Exp>;
};


export type Subscription_RootExperiences_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Experiences_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Experiences_Order_By>>;
  where?: InputMaybe<Experiences_Bool_Exp>;
};


export type Subscription_RootExperiences_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootExperiences_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Experiences_Stream_Cursor_Input>>;
  where?: InputMaybe<Experiences_Bool_Exp>;
};


export type Subscription_RootInscription_TypeArgs = {
  distinct_on?: InputMaybe<Array<Inscription_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Inscription_Type_Order_By>>;
  where?: InputMaybe<Inscription_Type_Bool_Exp>;
};


export type Subscription_RootInscription_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Inscription_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Inscription_Type_Order_By>>;
  where?: InputMaybe<Inscription_Type_Bool_Exp>;
};


export type Subscription_RootInscription_Type_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootInscription_Type_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Inscription_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Inscription_Type_Bool_Exp>;
};


export type Subscription_RootProject_SkillsArgs = {
  distinct_on?: InputMaybe<Array<Project_Skills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Skills_Order_By>>;
  where?: InputMaybe<Project_Skills_Bool_Exp>;
};


export type Subscription_RootProject_Skills_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_Skills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Skills_Order_By>>;
  where?: InputMaybe<Project_Skills_Bool_Exp>;
};


export type Subscription_RootProject_Skills_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootProject_Skills_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Project_Skills_Stream_Cursor_Input>>;
  where?: InputMaybe<Project_Skills_Bool_Exp>;
};


export type Subscription_RootProjectsArgs = {
  distinct_on?: InputMaybe<Array<Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Projects_Order_By>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};


export type Subscription_RootProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Projects_Order_By>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};


export type Subscription_RootProjects_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootProjects_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Projects_Stream_Cursor_Input>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};


export type Subscription_RootRemote_CategoryArgs = {
  distinct_on?: InputMaybe<Array<Remote_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Remote_Category_Order_By>>;
  where?: InputMaybe<Remote_Category_Bool_Exp>;
};


export type Subscription_RootRemote_Category_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Remote_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Remote_Category_Order_By>>;
  where?: InputMaybe<Remote_Category_Bool_Exp>;
};


export type Subscription_RootRemote_Category_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootRemote_Category_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Remote_Category_Stream_Cursor_Input>>;
  where?: InputMaybe<Remote_Category_Bool_Exp>;
};


export type Subscription_RootSkill_CategoryArgs = {
  distinct_on?: InputMaybe<Array<Skill_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Skill_Category_Order_By>>;
  where?: InputMaybe<Skill_Category_Bool_Exp>;
};


export type Subscription_RootSkill_Category_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Skill_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Skill_Category_Order_By>>;
  where?: InputMaybe<Skill_Category_Bool_Exp>;
};


export type Subscription_RootSkill_Category_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootSkill_Category_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Skill_Category_Stream_Cursor_Input>>;
  where?: InputMaybe<Skill_Category_Bool_Exp>;
};


export type Subscription_RootSkillsArgs = {
  distinct_on?: InputMaybe<Array<Skills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Skills_Order_By>>;
  where?: InputMaybe<Skills_Bool_Exp>;
};


export type Subscription_RootSkills_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Skills_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Skills_Order_By>>;
  where?: InputMaybe<Skills_Bool_Exp>;
};


export type Subscription_RootSkills_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootSkills_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Skills_Stream_Cursor_Input>>;
  where?: InputMaybe<Skills_Bool_Exp>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetInfoQuery = { __typename?: 'query_root', contacts: Array<{ __typename?: 'contacts', id: any, name: string, href?: string | null, category: Contact_Category_Enum, data: string, visible: boolean }>, experiences: Array<{ __typename?: 'experiences', id: any, name: string, name_href?: string | null, category: Experience_Category_Enum, inscription?: string | null, inscription_type: Inscription_Type_Enum, inscription_href?: string | null, date_start: any, date_end?: any | null, location?: string | null, remote: Remote_Category_Enum, description?: string | null, items?: string | null, visible: boolean, experience_skills: Array<{ __typename?: 'experience_skills', skill: { __typename?: 'skills', name: string } }> }>, skills: Array<{ __typename?: 'skills', id: any, name: string, href?: string | null, category: Skill_Category_Enum, description?: string | null, visible: boolean }> };


export const GetInfoDocument = gql`
    query GetInfo {
  contacts {
    id
    name
    href
    category
    data
    visible
  }
  experiences {
    id
    name
    name_href
    category
    inscription
    inscription_type
    inscription_href
    date_start
    date_end
    location
    remote
    experience_skills {
      skill {
        name
      }
    }
    description
    items
    visible
  }
  skills {
    id
    name
    href
    category
    description
    visible
  }
}
    `;

/**
 * __useGetInfoQuery__
 *
 * To run a query within a React component, call `useGetInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetInfoQuery, GetInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetInfoQuery, GetInfoQueryVariables>(GetInfoDocument, options);
      }
export function useGetInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInfoQuery, GetInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetInfoQuery, GetInfoQueryVariables>(GetInfoDocument, options);
        }
export type GetInfoQueryHookResult = ReturnType<typeof useGetInfoQuery>;
export type GetInfoLazyQueryHookResult = ReturnType<typeof useGetInfoLazyQuery>;
export type GetInfoQueryResult = Apollo.QueryResult<GetInfoQuery, GetInfoQueryVariables>;